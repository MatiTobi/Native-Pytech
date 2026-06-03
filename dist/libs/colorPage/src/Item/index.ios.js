import { background, clipShape, buttonStyle, controlSize, frame, glassEffect, padding, foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { Text, Button } from '@expo/ui/swift-ui';
import React, { memo, useMemo } from 'react';
import { colors } from '../../../../libs/components/Gradient';
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
			{React.createElement(renderGradientIOS, { color, iconSize: size })}
		</Button>);
    const modifiers = useMemo(() => [
        frame({ width: size, height: size }),
        foregroundStyle('transparent'),
        background(colors[color].middle),
        clipShape('circle'),
    ], [size]);
    return (<Button modifiers={modifiersButton} onPress={() => onSelectColor?.(color)}>
			<Text modifiers={modifiers}>
				.
			</Text>
		</Button>);
});
