import { clip, size as sizeModifier, border, background, clickable } from '@expo/ui/jetpack-compose/modifiers';
import { Box } from '@expo/ui/jetpack-compose';
import React, { memo, useMemo } from 'react';
import { colors } from '../../../../libs/components/Gradient';
export default memo(({ color, size, selectedColor, onSelectColor, }) => {
    const modifiers = useMemo(() => [
        sizeModifier(size, size),
        clip({ type: 'circle' }),
        background(colors[color].middle),
        border(1, colors[color].light),
        clickable(() => onSelectColor?.(color))
    ], []);
    return <Box modifiers={modifiers}/>;
});
