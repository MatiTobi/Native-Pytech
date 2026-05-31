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
	defaultValue,
	minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
	maxDate = new Date(),

}: Props) => {

    const { colorScheme } = useApp()
	const { store, registerItem } = usePage()
    
	const [selection, setSelection] = useState<Date | undefined>(defaultValue)
    const inputRef = useRef<HTMLInputElement>(null)

	// Key
	const keyRef = useRef<string | number>(itemKey)
	useEffect(() => {
		keyRef.current = registerItem(itemKey)
	}, [])

	// Hooks
	useEffect(() => setSelection(defaultValue), [defaultValue])

	const onValueChange = useCallback((value_str: string) => {
        const [year, month, day] = value_str.split('-').map(Number)
        const value = new Date(year, month - 1, day)

		setSelection(value)
		store.values[keyRef.current ?? 0].set({
			value: value,
			hasChanged: value.getTime() !== defaultValue?.getTime(),
			isValid: true,
		})
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
                        <Table.Option.Components.Text text={selection ? Formats.dateToTextFormat(selection, 'dd/MM/yyyy') : ''} style={{color: 'white', userSelect: 'none'}}/>
                        <input
                            ref={inputRef}
                            type="date"
                            value={selection ? Formats.dateToTextFormat(selection, 'yyyy-MM-dd') : ''}
                            onChange={(e) => onValueChange(e.target.value)}
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
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
})