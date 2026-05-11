import { Text } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
export default memo(({ modifiers, secondary = false, ...restProps }) => {
    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
        ...(secondary ? [foregroundStyle({ type: 'hierarchical', style: 'secondary' })] : []),
    ], [modifiers, secondary]);
    return (<Text modifiers={_modifiers} {...restProps}/>);
});
