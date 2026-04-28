import { HStack, Spacer, TextProps, Label } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from '../Text';
import NavigationLink, { Props as NavigationLinkProps } from './Wrapper'



type Props = Omit<NavigationLinkProps, 'children'> & {
    /**
        Children to display on the left.
        If not provided, the title will be displayed.
    */
    children?: React.ReactNode
    /**
        Text to display on the left.
        Will render if the children are not provided.
    */
    title?: string
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps
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
    title,
    titleTextProps,
    secondaryText,
    secondaryTextProps,
    ...navigationLinkProps

}: Props) => {

	return (
        <NavigationLink {...navigationLinkProps}>
            <HStack>
                {children || <Text {...titleTextProps}>{title}</Text>}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>
	);
})