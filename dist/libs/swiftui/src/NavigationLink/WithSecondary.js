import { HStack, Spacer, Label } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import Text from '../Text';
import NavigationLink from './Wrapper';
export default memo(({ children, onPress, secondaryText, secondaryTextProps, ...labelProps }) => {
    return (<NavigationLink onPress={onPress}>
            <HStack>
                {children || <Label {...labelProps}/>}
                <Spacer />
                <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
            </HStack>
        </NavigationLink>);
});
