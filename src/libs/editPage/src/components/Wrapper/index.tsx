import { useObservable, useValue } from '@legendapp/state/react'
import { Stack, router } from 'expo-router';
import React, { memo, RefObject, useCallback, useMemo, useRef } from 'react';

import { Provider, TextFieldsRefsType } from '../../context/page';
import Props, { Store, Value } from './types';
import Screen from '../Screen';



export default memo(({ children, onSave }: Props) => {

	const textFieldsRefs = useRef<TextFieldsRefsType>({})
	const indexRef = useRef(0)

	// Store
	const store = useObservable<Store>({
		values: {},
		saveEnabled: () => {
			const listValues: Value[] = Object.values(store.values.get())

			const hasChanged = listValues.some(value => value.hasChanged)
			const allValid = listValues.every(value => value.isValid)

			return hasChanged && allValid
		},
		isUniqueItem: () => {
			const listValues: Value[] = Object.values(store.values.get())
			return listValues.length === 1
		},
    })

	const saveEnabled = useValue(() => store.saveEnabled.get())

	// onPress
	const onPressSave = useCallback(async () => {
		// Obtengo los valores del store
		const values = store.values.peek()
		const valuesToSave = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.value ?? null]))

		// Llamo a la función onSave
		const result = await onSave?.(valuesToSave)
		if (result === false) return
		router.back()
	}, [onSave, store.values])

	// Register
	const registerItem = (itemKey?: string, ref?: RefObject<any>) => {
		const key = itemKey ?? indexRef.current
		indexRef.current++
		ref && (textFieldsRefs.current[key] = ref)
		return key
	}

	const next = (itemKey: string | number) => {
		const keys = Object.keys(textFieldsRefs.current)
		const index = keys.findIndex(key => key > itemKey)
		if (index === -1) return
		const nextKey = keys[index + 1]
		if (!nextKey) return
		textFieldsRefs.current[nextKey].current?.focus()
	}

	const onSubmit = async (itemKey: string | number) => {
		console.log('onSubmit', 'itemKey', itemKey)
		// Guarda los cambios
		if (store.isUniqueItem.peek()){
			if (!saveEnabled) return
			await onPressSave()
			return
		}

		// Va al siguiente campo
		next(itemKey)
	}

	const value = useMemo(() => ({ store, onSubmit, registerItem }), [])


	return (
		<>
			<Stack.Toolbar placement="left">
				<Stack.Toolbar.Button onPress={() => router.back()}>
					<Stack.Toolbar.Icon sf="xmark" />
				</Stack.Toolbar.Button>
			</Stack.Toolbar>

			<Stack.Toolbar placement="right">
				<Stack.Toolbar.Button disabled={!saveEnabled} variant="done" onPress={onPressSave}>
					<Stack.Toolbar.Icon sf="checkmark" />
				</Stack.Toolbar.Button>
			</Stack.Toolbar>

			<Screen>
				<Provider value={value}>
					{children}
				</Provider>
			</Screen>
		</>
	);
})