import { Button, HStack, Spacer, Image } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';
export default memo(({ children, onPress, addSpacer = true }) => {
    return (<HStack>
            {onPress && <Button onPress={() => onPress?.()}/>}
            {children}
            {addSpacer && <Spacer />}
            <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator}/>
        </HStack>);
});
