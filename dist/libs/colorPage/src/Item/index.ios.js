import { clipShape, buttonStyle, controlSize, glassEffect, padding } from '@expo/ui/swift-ui/modifiers';
import { Button } from '@expo/ui/swift-ui';
import React, { memo, useMemo } from 'react';
import { colors } from '@/libs/components/Gradient';
export default memo(({ color, size, selectedColor, onSelectColor, renderGradientIOS }) => {
    if (!renderGradientIOS)
        return null;
    const modifiersButton = useMemo(() => [
        buttonStyle('plain'),
        controlSize('large'),
        padding({ all: 1.5 }),
        clipShape('circle'),
        glassEffect({
            glass: {
                variant: 'regular',
                interactive: true,
                tint: colors[color].light
            },
            shape: 'circle'
        })
    ], []);
    return (<Button onPress={() => onSelectColor?.(color)} modifiers={modifiersButton}>
			{React.createElement(renderGradientIOS, { color, sizeDiameter: size })}
		</Button>);
});
