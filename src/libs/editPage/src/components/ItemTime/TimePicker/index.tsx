import { memo, useCallback, useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Table from '@/libs/table'
import { useApp } from '@/libs/providers/App';
import Formats from '@/libs/constants/formats';

import type Props from './types';
import Colors from '@/libs/constants/colors';



export default memo(({
	label,
    selection,
	minDate,
	maxDate,
    onValueChange,

}: Props) => {

    const { colorScheme } = useApp()
    const inputRef = useRef<HTMLInputElement>(null)

	const _onValueChange = useCallback((value_str: string) => {
        const [hours, minutes] = value_str.split(':').map(Number)
		if (Number.isNaN(hours) || Number.isNaN(minutes)) return
        const value = new Date()
        value.setHours(hours, minutes, 0, 0)
        onValueChange?.(value)
	}, [])
    
    
	return (
        <Table.Option
            id={label ?? ''}
            colorScheme={colorScheme}
            childrenLeft={<Table.Option.Components.Text text={label ?? 'Seleccione una hora'} />}
            childrenRight={(
                <>
                    <Pressable
                        onPress={() => inputRef.current?.showPicker()}
                        style={[styles.container, { backgroundColor: Colors.especiales.azul }]}
                    >
                        <Table.Option.Components.Text text={Formats.dateToTextFormat(selection, 'HH:mm')} style={{color: 'white', userSelect: 'none'}}/>
                        <input
                            ref={inputRef}
                            type="date"
                            value={Formats.dateToTextFormat(selection, 'HH:mm')}
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