import { HStack, Spacer, TextProps, Label } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from '../Text';
import NavigationLink from './Wrapper'



type Props = {
    /**
        Children to display on the left.
    */
    children?: React.ReactNode
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps
}


export default memo(({
    children,
    secondaryText,
    secondaryTextProps,
    onPress,

}: Props) => {

	return (
        <NavigationLink onPress={onPress}>
            <HStack>
                {children}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>
	);
})