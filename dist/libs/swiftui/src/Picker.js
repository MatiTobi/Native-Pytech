import { Picker, Text } from '@expo/ui/swift-ui';
import { pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import React, { memo, useMemo } from 'react';
export default memo(({ modifiers, data = [], ...pickerProps }) => {
    const _modifiers = useMemo(() => [pickerStyle('menu')], []);
    return (<Picker modifiers={[..._modifiers, ...(modifiers || [])]} {...pickerProps}>
            {data.map(item => (<Text key={item} modifiers={[tag(item)]}>
                    {item}
                </Text>))}
        </Picker>);
});
