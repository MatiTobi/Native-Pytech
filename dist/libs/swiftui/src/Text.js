import { Text } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';
export default memo(({ modifiers, secondary = false, ...restProps }) => {
    const _modifiers = secondary ? [foregroundStyle({ type: 'hierarchical', style: 'secondary' })] : [];
    return (<Text modifiers={[..._modifiers, ...(modifiers || [])]} {...restProps}/>);
});
