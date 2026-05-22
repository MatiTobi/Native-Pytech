import React, { memo } from 'react';
import { Shape, Surface, Box } from '@expo/ui/jetpack-compose';
import { background, clip, Shapes, clickable, paddingAll, alpha, size as sizeModifier } from '@expo/ui/jetpack-compose/modifiers';
import { colors } from '../../../../libs/components/Gradient';
export default memo(({ color, size, selectedColor, onSelectColor, renderGradient, }) => {
    if (!renderGradient)
        return null;
    const isSelected = color === selectedColor;
    const innerBorderWidth = 2;
    const outerBorderWidth = 3;
    return (<Surface color='#00000000' shape={Shape.RoundedCorner({
            cornerRadii: {
                topStart: size,
                topEnd: size,
                bottomStart: size,
                bottomEnd: size,
            },
        })} border={{ width: outerBorderWidth, color: isSelected ? colors[color].middle : '#00000000' }} modifiers={[clip(Shapes.Circle)]}>
            <Box contentAlignment="center" modifiers={[
            background('#00000000'),
            paddingAll(outerBorderWidth * 2),
            clip(Shapes.Circle),
            clickable(() => onSelectColor?.(color))
        ]}>

                <Box contentAlignment="center" modifiers={[sizeModifier(size, size)]}>

                    {!isSelected &&
            <Box contentAlignment="center" modifiers={[sizeModifier(size, size)]}>
                            {React.createElement(renderGradient, { color, size })}
                            <Box modifiers={[sizeModifier(size, size), alpha(0.25), background('#FFFFFF')]}/>
                        </Box>}

					{React.createElement(renderGradient, { color, size: size - (!isSelected ? innerBorderWidth * 2 : 0) })}

                </Box>

            </Box>
        </Surface>);
});
