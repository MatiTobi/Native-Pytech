import { Label, HStack } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
export default memo(({ children, ...labelProps }) => {
    return (<HStack>
            <Label {...labelProps} title=""/>
            {children}
        </HStack>);
});
