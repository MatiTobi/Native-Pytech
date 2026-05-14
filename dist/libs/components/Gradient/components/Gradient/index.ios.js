import React, { memo, useMemo } from 'react';
import { frame, font, foregroundStyle, background, clipShape } from '@expo/ui/swift-ui/modifiers';
import { Text, Image } from '@expo/ui/swift-ui';
import colors, { sizes } from '../../constants';
export default memo(({ text, color, type = 'small', systemName, iconSize, }) => {
    const typeSizes = useMemo(() => sizes[type], [type]);
    const cantLetras = text?.length ?? 0;
    const modifiers = useMemo(() => [
        frame({ width: typeSizes.diameter, height: typeSizes.diameter }),
        font({ weight: 'semibold', size: typeSizes.fontSize[cantLetras] }),
        foregroundStyle('white'),
        background(colors[color].dark),
        clipShape('circle'),
    ], [typeSizes]);
    // Return
    if (text && cantLetras <= 3) {
        return (<Text modifiers={[
                font({ weight: 'semibold', size: typeSizes.fontSize[cantLetras] }),
                ...modifiers
            ]}>
                {text}
            </Text>);
    }
    return (<Image systemName={systemName} color='white' size={iconSize ?? typeSizes.diameter / 2}/>);
});
