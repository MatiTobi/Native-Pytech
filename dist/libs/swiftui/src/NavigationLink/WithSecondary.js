import { HStack, Spacer } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import Text from '../Text';
import NavigationLink from './Wrapper';
export default memo(({ children, secondaryText, secondaryTextProps, onPress, }) => {
    return (<NavigationLink onPress={onPress}>
            <HStack>
                {children}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>);
});
