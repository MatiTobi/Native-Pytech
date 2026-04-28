import { Button, HStack, Spacer, Image } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';
export default memo(({ children, ...buttonProps }) => {
    return (<HStack>
            <Button {...buttonProps}>
                {children}
            </Button>
            <ChevronRight />
        </HStack>);
});
const ChevronRight = memo(() => {
    return (<>
            <Spacer />
            <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator}/>
        </>);
});
