import { Button, Text } from '@expo/ui/swift-ui';
import { frame, font, foregroundStyle, buttonStyle, controlSize, disabled } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
export default memo(({ text, onPress, onSubmit, backgroundColorPage, enabled = true, themeColor = 'default' }) => {
    const { width } = useWindowDimensions();
    const modifiers = useMemo(() => [
        disabled(!enabled),
        buttonStyle('glassProminent'),
        controlSize('large')
    ], [enabled]);
    const modifiersText = useMemo(() => [
        frame({ width: width - 110 }),
        font({ weight: 'semibold' }),
        foregroundStyle('#85fffd') // colors.especiales.celeste
    ], [width]);
    return (<Button onPress={onSubmit} modifiers={modifiers}>
            <Text modifiers={modifiersText}>
                Siguiente
            </Text>
        </Button>);
});
