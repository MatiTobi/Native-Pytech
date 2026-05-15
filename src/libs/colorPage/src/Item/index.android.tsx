import { clip, size as sizeModifier, border, background, clickable } from '@expo/ui/jetpack-compose/modifiers';
import { Box } from '@expo/ui/jetpack-compose';
import React, { memo, useMemo } from 'react';
import { colors } from '@/libs/components/Gradient';

import type Props from './types';



export default memo(({
	color,
	size,
	selectedColor,
	onSelectColor,

}: Props) => {

	const modifiers = useMemo(() => [
		sizeModifier(size, size),
		border(2, colors[color].light),
		background(colors[color].middle),
		clip({ type: 'circle' }),
		clickable(() => onSelectColor?.(color))
    ], [])

	return <Box modifiers={modifiers} />

})