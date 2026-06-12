import { memo, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Table from '@/libs/table'
import { useApp } from '@/libs/providers/App';
import Formats from '@/libs/constants/formats';

import type Props from './types';
import { usePage } from '../../context/page';
import Colors from '@/libs/constants/colors';
import Hooks from '@/libs/constants/hooks';



export default memo(({
	itemKey,
	label,
    selection,
	defaultValue,
	minDate,
	maxDate,
    onValueChange,

}: Props) => {

    const { colorScheme } = useApp()
	const { store, registerItem } = usePage()
    
	const [_selection, setSelection] = useState<Date | undefined>(selection)
    const inputRef = useRef<HTMLInputElement>(null)
    
    const currentDate = useMemo(() => _selection ?? defaultValue ?? new Date(), [_selection, defaultValue])
	const currentDateRanged = useMemo(() => {
		if (maxDate && currentDate > maxDate) return maxDate
		if (minDate && currentDate < minDate) return minDate
		return currentDate
	}, [currentDate, minDate, maxDate])


	// Key
	const keyRef = useRef<string | number>(itemKey)
	useEffect(() => {
		keyRef.current = registerItem(itemKey)
        _onValueChange(Formats.dateToTextFormat(currentDate, 'yyyy-MM-dd'))
	}, [])

	// Hooks
	useEffect(() => setSelection(selection), [selection])
	Hooks.useEffectWithoutFirstRender(() => {
		setSelection(currentDateRanged)
		_onValueChange(Formats.dateToTextFormat(currentDateRanged, 'yyyy-MM-dd'))
	}, [currentDateRanged])

	const _onValueChange = useCallback((value_str: string) => {
        const [year, month, day] = value_str.split('-').map(Number)
        const value = new Date(year, month - 1, day)

		setSelection(value)
		store.values[keyRef.current ?? 0].set({
			value: value,
			hasChanged: value.getTime() !== selection?.getTime(),
			isValid: true,
		})
        onValueChange?.(value)
	}, [])
    
    
	return (
        <Table.Option
            id={label ?? ''}
            colorScheme={colorScheme}
            childrenLeft={<Table.Option.Components.Text text={label ?? 'Seleccione una fecha'} />}
            childrenRight={(
                <>
                    <Pressable
                        onPress={() => inputRef.current?.showPicker()}
                        style={[styles.container, { backgroundColor: Colors.especiales.azul }]}
                    >
                        <Table.Option.Components.Text text={Formats.dateToTextFormat(currentDateRanged, 'dd/MM/yyyy')} style={{color: 'white', userSelect: 'none'}}/>
                        <input
                            ref={inputRef}
                            type="date"
                            value={Formats.dateToTextFormat(currentDateRanged, 'yyyy-MM-dd')}
                            onChange={(e) => _onValueChange(e.target.value)}
                            style={{
                                all: 'unset',
                                visibility: 'hidden',
                                width: 0,
                                position: 'absolute'
                            }}
                        />
                    </Pressable>
                </>
            )}
        />
	)
})

const styles = StyleSheet.create({
    container: {
        padding: 7,
        paddingHorizontal: 30,
        borderRadius: 20
    },
})