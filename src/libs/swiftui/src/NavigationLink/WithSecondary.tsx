import { HStack, Spacer, TextProps } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from '../Text';
import NavigationLink from './Wrapper'



type Props = {
    /**
        Text to display on the left.
    */
    title?: string
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps
}


export default memo(({
    title,
    secondaryText,
    titleTextProps,
    secondaryTextProps,
    onPress,

}: Props) => {

	return (
        <NavigationLink onPress={onPress}>
            <HStack>
                <Text {...titleTextProps}>{title}</Text>
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>
	);
})