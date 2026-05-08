import React, { useMemo, memo, useRef, useCallback, useEffect } from "react";
import { SecureField, TextField, TextFieldRef, TextFieldProps } from "@expo/ui/swift-ui"
import { keyboardType as keyboardTypeModifier, submitLabel, textInputAutocapitalization, onSubmit } from '@expo/ui/swift-ui/modifiers';

import type Props from './types';
import { usePage } from '../../context/page';
import { useItem } from '../../context/item';



export default memo(({
	defaultValue,
	placeholder,
	keyboardType,
	autocapitalization=true,
	secureTextEntry,
	isValid,

}: Props) => {

	// ------------------- Variables -------------------
	const { store, isUniqueItem, saveEnabledRef, onPressSave, textFieldsRefs } = usePage()
	const { index, nextIndex } = useItem()

	const ref = useRef<TextFieldRef>(null)
	textFieldsRefs.current[index] = ref

	useEffect(() => {
		store.values[index].value.set(defaultValue)
	}, [defaultValue])


	// -------------------- Functions --------------------
	const onValueChange = useCallback((value: string) => {
		const _value = value.trim() === '' ? null : value.trim()
		
		store.values[index].set({
			value: _value,
			hasChanged: (_value !== defaultValue && defaultValue !== undefined),
			isValid: isValid?.(_value) ?? true,
		})
	}, [])

	const _onSubmit = useCallback(() => {
		// Guarda los cambios
		if (isUniqueItem){
			const saveEnabled = saveEnabledRef.current
			if (!saveEnabled) return
			onPressSave()
			return
		}

		// Va al siguiente campo
		if (!nextIndex) return
		textFieldsRefs.current[nextIndex].current?.focus()
	}, [])


	// -------------------- Props --------------------
    const modifiers = useMemo(() => [
		...(isUniqueItem ? [submitLabel('done')] : []),
		...(keyboardType ? [keyboardTypeModifier(keyboardType)] : []),
		...(!autocapitalization ? [textInputAutocapitalization('never')] : []),
		onSubmit(_onSubmit),
	], [keyboardType, autocapitalization, isUniqueItem])

	const props = useMemo(() => ({
		autoFocus: isUniqueItem,
		modifiers,
		placeholder,
		defaultValue,
		onValueChange,
	}), [modifiers, placeholder, defaultValue]) as TextFieldProps

	
	if (secureTextEntry) return <SecureField {...props} ref={ref}/>
	return <TextField {...props} ref={ref}/>
})