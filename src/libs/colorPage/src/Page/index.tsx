import React, { memo, useMemo, useCallback } from 'react';
import { Stack, useRouter } from 'expo-router';
import { colors, ColorsType } from '@/libs/components/Gradient';

import type Props from './types';
import Content from '../Content';



export default memo(({
	onSelectColor,
	...restProps

}: Props) => {

	const router = useRouter()

	const listColors = useMemo(() => Object.keys(colors) as ColorsType[], [])
	const colorRows = useMemo(() =>
		Array.from({ length: Math.ceil(listColors.length / 4) }, (_, i) => listColors.slice(i * 4, i * 4 + 4))
	, [listColors])

	const _onSelectColor = useCallback((color: ColorsType) => {
		router.back()
		onSelectColor?.(color)
	}, [onSelectColor])


	return (
		<>
			<Stack.Screen.Title>Color de fondo</Stack.Screen.Title>
			<Content
				colorRows={colorRows}
				onSelectColor={_onSelectColor}
				{...restProps}
			/>
		</>
	)
})
