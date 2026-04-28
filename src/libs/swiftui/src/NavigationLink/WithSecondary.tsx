import { HStack, Spacer, TextProps, Label } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from '../Text';
import NavigationLink, { Props as NavigationLinkProps } from './Wrapper'



type Props = Omit<NavigationLinkProps, 'children'> & {
    /**
        Children to display on the left.
    */
    children?: React.ReactNode
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
    secondaryText,
    secondaryTextProps,
    ...navigationLinkProps

}: Props) => {

	return (
        <NavigationLink {...navigationLinkProps}>
            <HStack>
                {children}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>
	);
})