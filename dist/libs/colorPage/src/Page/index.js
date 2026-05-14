import React, { memo, useMemo, useCallback } from 'react';
import { Stack, useRouter } from 'expo-router';
import { colors } from '@/libs/components/Gradient';
import Content from '../Content';
export default memo(({ onSelectColor, ...restProps }) => {
    const router = useRouter();
    const listColors = useMemo(() => Object.keys(colors), []);
    const colorRows = useMemo(() => Array.from({ length: Math.ceil(listColors.length / 4) }, (_, i) => listColors.slice(i * 4, i * 4 + 4)), [listColors]);
    const _onSelectColor = useCallback((color) => {
        router.back();
        onSelectColor?.(color);
    }, [onSelectColor]);
    return (<>
			<Stack.Screen.Title>Color de fondo</Stack.Screen.Title>
			<Content colorRows={colorRows} onSelectColor={_onSelectColor} {...restProps}/>
		</>);
});
