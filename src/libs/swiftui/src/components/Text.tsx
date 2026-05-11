import { Text, TextProps } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';


export default memo(({
    modifiers,
    secondary=false,
    ...restProps
    
}: TextProps & { secondary?: boolean }) => {

    const _modifiers = useMemo(() => secondary ? [foregroundStyle({type: 'hierarchical', style: 'secondary'})] : [], [secondary]);

    return (
        <Text modifiers={[...(modifiers || []), ..._modifiers]} {...restProps} />
    )
})
