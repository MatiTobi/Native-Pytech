import React, { memo, useMemo } from 'react';
import { frame, font, foregroundStyle, background, clipShape } from '@expo/ui/swift-ui/modifiers';
import { Text, Image } from '@expo/ui/swift-ui';
import colors, { sizes } from '../../constants';
export default memo(({ text, color = 'default', type = 'small', sizeDiameter, systemName, iconSize, }) => {
    const typeSizes = useMemo(() => {
        if (!sizeDiameter)
            return sizes[type];
        return {
            diameter: sizeDiameter,
            fontSize: {
                1: sizeDiameter * 0.53,
                2: sizeDiameter * 0.48,
                3: sizeDiameter * 0.43
            }
        };
    }, [type]);
    const cantLetras = text?.length ?? 0;
    const modifiers = useMemo(() => [
        frame({ width: typeSizes.diameter, height: typeSizes.diameter }),
        foregroundStyle('white'),
        background(colors[color].dark),
        clipShape('circle'),
    ], [typeSizes, color]);
    // Return
    if (text && cantLetras <= 3) {
        return (<Text modifiers={[
                font({ weight: 'semibold', size: typeSizes.fontSize[cantLetras] }),
                ...modifiers
            ]}>
                {text}
            </Text>);
    }
    return (<Image systemName={systemName} color='white' size={iconSize ?? typeSizes.diameter / 2} modifiers={modifiers}/>);
});
