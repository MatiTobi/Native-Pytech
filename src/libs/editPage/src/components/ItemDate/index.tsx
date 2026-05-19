import { Section, DatePicker } from '@expo/ui/swift-ui';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';

import type Props from './types';
import { usePage } from '../../context/page';
import { useItem } from '../../context/item';



export default memo(({
	label,
	defaultValue,
	minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
	maxDate = new Date()

}: Props) => {

	const { store } = usePage()
	const { index } = useItem()

	const [selection, setSelection] = useState<Date | undefined>(defaultValue)


	// Hooks
	useEffect(() => setSelection(defaultValue), [defaultValue])

	const onValueChange = useCallback((value: Date) => {		
		setSelection(value)
		store.values[index].set({
			value: value,
			hasChanged: value.getTime() !== defaultValue?.getTime(),
			isValid: true,
		})
	}, [])


	return (
		<Section>
			<DatePicker
				title={label}
				selection={selection}
				onDateChange={onValueChange}
				modifiers={[environment('locale', 'es_ES')]}
				range={{
					start: minDate,
					end: maxDate,
				}}
			/>
		</Section>
	)
})