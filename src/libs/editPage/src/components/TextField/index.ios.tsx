import React, { useMemo, memo, useRef, useCallback, useEffect } from "react";
import { useValue } from "@legendapp/state/react"
import { SecureField, TextField, TextFieldRef } from "@expo/ui/swift-ui"
import { keyboardType as keyboardTypeModifier, submitLabel, textInputAutocapitalization, onSubmit } from '@expo/ui/swift-ui/modifiers';

import type Props from './types';
import { usePage } from '../../context/page';



export default memo(({
	itemKey,
	defaultValue,
	placeholder,
	keyboardType,
	autocapitalization=true,
	secureTextEntry,
	isValid,

}: Props) => {

	const { store, registerItem, onSubmit: _onSubmit } = usePage()

	const isUniqueItem = useValue(() => store.isUniqueItem.get())
	const ref = useRef<TextFieldRef>(null)

	// Key
	const keyRef = useRef<string | number>(itemKey)
	useEffect(() => {
		keyRef.current = registerItem(itemKey, ref)
	}, [])

	// onChange
	const onValueChange = useCallback((value: string) => {
		const _value = value.trim() === '' ? null : value.trim()
		
		store.values[keyRef.current].set({
			value: _value,
			hasChanged: _value !== defaultValue,
			isValid: isValid?.(_value) ?? true,
		})
	}, [])

	// Props
    const modifiers = useMemo(() => [
		...(isUniqueItem ? [submitLabel('done')] : []),
		...(keyboardType ? [keyboardTypeModifier(keyboardType)] : []),
		...(!autocapitalization ? [textInputAutocapitalization('never')] : []),
		onSubmit(() => _onSubmit(keyRef.current)),
	], [keyboardType, autocapitalization, isUniqueItem])

	const props = { autoFocus: isUniqueItem, modifiers, placeholder, defaultValue, onValueChange }

	if (secureTextEntry) return <SecureField {...props} ref={ref}/>
	return <TextField {...props} ref={ref}/>
})