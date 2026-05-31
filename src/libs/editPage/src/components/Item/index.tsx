import { memo } from 'react';

import Table from '@/libs/table'
import { useApp } from '@/libs/providers/App';

import type Props from './types';
import TextField from '../TextField';



export default memo(({
	label,
	minLengthSpacer,
    placeholder,
	...textFieldProps

}: Props) => {

    const { colorScheme } = useApp()
    
	return (
        <Table.Option
            id={label ?? ''}
            colorScheme={colorScheme}
            childrenLeft={label ? <Table.Option.Components.Text text={label} /> : <Table.Option.Components.Text text={placeholder ?? ''} />}
            childrenRight={<TextField placeholder={label ? placeholder : undefined} {...textFieldProps} />}
        />
	)
})