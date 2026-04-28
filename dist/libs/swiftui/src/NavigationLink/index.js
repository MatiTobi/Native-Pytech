import { Button, HStack } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import Right from './Right';
export default memo(({ children, secondaryText, secondaryTextProps, ...buttonProps }) => {
    return (<HStack>
            <Button {...buttonProps}>
                {children}
            </Button>
            <Right secondaryText={secondaryText} secondaryTextProps={secondaryTextProps}/>
        </HStack>);
});
