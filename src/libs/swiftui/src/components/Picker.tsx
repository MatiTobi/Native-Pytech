import { Picker, Text, PickerProps } from '@expo/ui/swift-ui';
import { pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import React, { memo, useMemo } from 'react';



type Props = Omit<PickerProps, 'children'> & {
    /**
        The data items to be rendered inside the picker.
        @default []
    */
    data?: (string | number)[]
}


export default memo(({
    modifiers,
    data=[],
    ...pickerProps

}: Props) => {

    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
        pickerStyle('menu'),
    ], [modifiers])

    return (
        <Picker
            modifiers={_modifiers}
            {...pickerProps}
        >
            {data.map(item => (
                <Text key={item} modifiers={[tag(item)]}>
                    {item}
                </Text>
            ))}
        </Picker>
    )
})