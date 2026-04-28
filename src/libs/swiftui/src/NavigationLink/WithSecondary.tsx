import { HStack, Spacer, TextProps, Label, LabelProps, ButtonProps } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from '../Text';
import NavigationLink from './Wrapper'



type Props = LabelProps & {
    /**
        Children to display on the left.
        If not provided, the label will be displayed.
    */
    children?: React.ReactNode
    /**
        Function to navigate to the destination page.
    */
    onPress?: ButtonProps['onPress']
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps
}


export default memo(({
    children,
    onPress,
    secondaryText,
    secondaryTextProps,
    ...labelProps

}: Props) => {

	return (
        <NavigationLink onPress={onPress}>
            <HStack>
                {children || <Label {...labelProps} />}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>
	);
})