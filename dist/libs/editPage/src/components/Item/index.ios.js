import { HStack, Spacer, Text } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import TextField from '../TextField';
export default memo(({ label, minLengthSpacer, ...textFieldProps }) => {
    if (!label)
        return <TextField {...textFieldProps}/>;
    return (<HStack>
            <Text>{label}</Text>
			<Spacer minLength={minLengthSpacer}/>
			<TextField {...textFieldProps}/>
        </HStack>);
});
