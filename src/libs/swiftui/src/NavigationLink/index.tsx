import { Button, HStack } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import type Props from './types';
import Trailing from './Trailing';



export default memo(({
    children,
    textTrailing,
    textTrailingProps,
    ...buttonProps

}: Props) => {
    
	return (
        <HStack>
            <Button {...buttonProps}>
                {children}
            </Button>
            <Trailing text={textTrailing} textProps={textTrailingProps} />
        </HStack>
	);
})
