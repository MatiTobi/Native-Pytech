import { Section, DatePicker } from '@expo/ui/swift-ui';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';

import type Props from './types';
import { usePage } from '../../context/page';



export default memo(({
	itemKey,
	label,
	defaultValue,
	minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
	maxDate = new Date(),
	onValueChange,

}: Props) => {

	const { store, registerItem } = usePage()
	const [selection, setSelection] = useState<Date | undefined>(defaultValue)

	// Key
	const keyRef = useRef<string | number>(itemKey)
	useEffect(() => {
		keyRef.current = registerItem(itemKey)
	}, [])

	// Hooks
	useEffect(() => setSelection(defaultValue), [defaultValue])

	const _onValueChange = useCallback((value: Date) => {		
		setSelection(value)
		store.values[keyRef.current ?? 0].set({
			value: value,
			hasChanged: value.getTime() !== defaultValue?.getTime(),
			isValid: true,
		})
		onValueChange?.(value)
	}, [])


	return (
		<Section>
			<DatePicker
				title={label}
				selection={selection}
				onDateChange={_onValueChange}
				modifiers={[environment('locale', 'es_ES')]}
				range={{
					start: minDate,
					end: maxDate,
				}}
			/>
		</Section>
	)
})