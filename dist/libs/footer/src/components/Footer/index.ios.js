import React, { memo } from 'react';
import { Overlay, VStack } from '@expo/ui/swift-ui';
export default memo(({ children, backgroundColorPage }) => {
    return (<Overlay.Content>
            <VStack spacing={10}>
                {children}
            </VStack>
        </Overlay.Content>);
});
