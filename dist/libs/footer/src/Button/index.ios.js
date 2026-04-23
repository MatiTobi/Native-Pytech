import colors from '../constants';
import { GlassView } from 'expo-glass-effect';
import { useApp } from "libs/providers/App";
import { memo, useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { adjustLightness } from 'libs/constants/utils';
import Text from './Text';
export default memo(({ text, onPress, onSubmit, backgroundColorPage, enabled = true, themeColor = 'default' }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const [isLoading, setIsLoading] = useState(false);
    const _onPress = useCallback(async () => {
        if (isLoading)
            return;
        if (onPress) {
            setIsLoading(true);
            const result = await onPress();
            setIsLoading(false);
            if (!result)
                return;
        }
        onSubmit?.();
    }, [onPress, onSubmit]);
    const backgroundColor = useCallback((pressed) => {
        return enabled ?
            (themeColor === 'default' ? adjustLightness(colors.especiales.azul, -10) : undefined)
            : Theme.colorButtonFooterDisabled;
    }, [enabled, themeColor]);
    const color = useMemo(() => themeColor === 'default' ? colors.especiales.celeste : Theme.text2, [themeColor]);
    return (<Pressable disabled={!enabled} onPress={_onPress} style={{ width: '100%' }}>
            <GlassView glassEffectStyle={themeColor === 'default' ? "clear" : "regular"} isInteractive={enabled} style={[
            styles.button,
            { backgroundColor: backgroundColor(true) }
        ]}>
                {!isLoading ? (<Text text={text} enabled={enabled} themeColor={themeColor}/>) : (<ActivityIndicator size='small' style={{ margin: 'auto' }} color={color}/>)}
            </GlassView>
        </Pressable>);
});
const styles = StyleSheet.create({
    button: {
        borderRadius: 99,
        paddingHorizontal: 20,
        paddingVertical: 15.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        fontSize: 17,
        fontWeight: '600',
    }
});
