import { Button, HStack, Spacer, Image } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';



type Props = {
    /**
        Children to display in the navigation link.
    */
    children?: React.ReactNode
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void
}


export default memo(({
    children,
    onPress,

}: Props) => {

	return (
        <HStack>
            {onPress && <Button onPress={() => onPress?.()} />}
            {children}
            <Spacer />
            <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator} />
        </HStack>
	);
})