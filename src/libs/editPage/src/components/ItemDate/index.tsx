import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Table from '@/libs/table'
import { useApp } from '@/libs/providers/App';
import Formats from '@/libs/constants/formats';

import type Props from './types';
import { usePage } from '../../context/page';
import Colors from '@/libs/constants/colors';



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
    
	const [_selection, setSelection] = useState<Date>(selection ?? defaultValue ?? new Date())
    const inputRef = useRef<HTMLInputElement>(null)

	// Key
	const keyRef = useRef<string | number>(itemKey)
	useEffect(() => {
		keyRef.current = registerItem(itemKey)
        _onValueChange(Formats.dateToTextFormat(_selection, 'yyyy-MM-dd'))
	}, [])

	// Hooks
	useEffect(() => {
        setSelection(selection ?? defaultValue ?? new Date())
        if (selection === undefined) _onValueChange(Formats.dateToTextFormat(_selection, 'yyyy-MM-dd'))
    }, [selection])

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
                        <Table.Option.Components.Text text={Formats.dateToTextFormat(_selection, 'dd/MM/yyyy')} style={{color: 'white', userSelect: 'none'}}/>
                        <input
                            ref={inputRef}
                            type="date"
                            value={Formats.dateToTextFormat(_selection, 'yyyy-MM-dd')}
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