import { Button, Text } from '@expo/ui/swift-ui';
import { frame, font, foregroundStyle, buttonStyle, controlSize, disabled } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useCallback, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { Props } from './types';



export default memo(({
    text,
    onPress,
    onSubmit,
    backgroundColorPage,
    enabled=true,
    themeColor='default'
    
}: Props) => {

    const { width } = useWindowDimensions();

    const modifiers = useMemo(() => [
        disabled(!enabled),
        buttonStyle('glassProminent'),
        controlSize('large')
    ], [enabled])

    const modifiersText = useMemo(() => [
        frame({ width: width - 110 }),
        font({ weight: 'semibold' }),
        ...(enabled ? [foregroundStyle('#85fffd')] : []), // colors.especiales.celeste
    ], [width, enabled])

    const _onPress = useCallback(async () => {
        if (onPress){
            const result = await onPress()
            if (!result) return
        }
        onSubmit?.()
    }, [onPress, onSubmit])

    
    return (
        <Button
            onPress={_onPress}
            modifiers={modifiers}
        >
            <Text modifiers={modifiersText}>
                {text}
            </Text>
        </Button>
    )
})