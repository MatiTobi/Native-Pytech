import { Button, HStack } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import type Props from './types';
import Right from './Right';



export default memo(({
    children,
    secondaryText,
    secondaryTextProps,
    ...buttonProps

}: Props) => {
    
	return (
        <HStack>
            <Button {...buttonProps}>
                {children}
            </Button>
            <Right secondaryText={secondaryText} secondaryTextProps={secondaryTextProps} />
        </HStack>
	);
})
