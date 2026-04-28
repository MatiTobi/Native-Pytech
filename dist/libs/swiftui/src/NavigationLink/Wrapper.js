import { Button, HStack, Spacer, Image } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { Color } from 'expo-router';
import React, { memo, useMemo } from 'react';
export default memo(({ children, modifiers, ...buttonProps }) => {
    const _modifiers = useMemo(() => [foregroundStyle({ type: 'color', color: Color.ios.label })], []);
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
