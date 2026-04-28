import { List } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';
export default memo(({ children, modifiers, ...listProps }) => {
    const _modifiers = [padding({ top: -15 })];
    return (<List modifiers={[..._modifiers, ...(modifiers || [])]} {...listProps}>
            {children}
        </List>);
});
