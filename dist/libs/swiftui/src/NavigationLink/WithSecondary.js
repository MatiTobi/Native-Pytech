import { HStack, Spacer } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import Text from '../Text';
import NavigationLink from './Wrapper';
export default memo(({ title, secondaryText, titleTextProps, secondaryTextProps, onPress, }) => {
    return (<NavigationLink onPress={onPress}>
            <HStack>
                <Text {...titleTextProps}>{title}</Text>
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>);
});
