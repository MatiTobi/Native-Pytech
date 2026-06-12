import { useObservable, useValue } from '@legendapp/state/react'
import { Stack, router } from 'expo-router';
import { Pressable, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { memo, RefObject, useCallback, useMemo, useRef } from 'react';

import { Provider, TextFieldsRefsType } from '../../context/page';
import Props, { Store, Value } from './types';
import Screen from '../Screen';
import Header from '../Header';



export default memo(({
	children,
	saveEnabled,
	onSave

}: Props) => {

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

	const _saveEnabled = useValue(() => store.saveEnabled.get())

	// onPress
	const onPressSave = useCallback(async () => {
		// Obtengo los valores del store
		const values = store.values.peek()
		const valuesToSave = Object.values(values).map(value => value.value ?? null)

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
		// Guarda los cambios
		if (store.isUniqueItem.peek()){
			if (!store.saveEnabled.peek()) return
			await onPressSave()
			return
		}

		// Va al siguiente campo
		next(itemKey)
	}

	const value = useMemo(() => ({ store, onSubmit, registerItem }), [])


	return (
		<>
			<Header
				saveEnabled={_saveEnabled && (saveEnabled ?? true)}
				onPressSave={onPressSave}
			/>
			<Screen>
				<Provider value={value}>
					{children}
				</Provider>
			</Screen>
		</>
	);
})