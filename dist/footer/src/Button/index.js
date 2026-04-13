import colors from '../constants';
import { useApp } from "../../../providers/app";
import { memo, useCallback, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { adjustLightness } from '../../../constants/utils';
import Text from './Text';
export default memo(({ text, onPress, onSubmit, backgroundColorPage, enabled = true, themeColor = 'default' }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const [isLoading, setIsLoading] = useState(false);
    const backgroundColor = useCallback((pressed) => {
        return enabled ? (pressed ?
            themeColor === 'default' ?
                colors.especiales.azul_pressed :
                colorScheme === 'dark' ? adjustLightness(backgroundColorPage, 10) : backgroundColorPage
            : themeColor === 'default' ?
                adjustLightness(colors.especiales.azul, -10) :
                colorScheme === 'dark' ? backgroundColorPage : adjustLightness(backgroundColorPage, -1))
            : Theme.colorButtonFooterDisabled;
    }, [enabled, themeColor, backgroundColorPage, colorScheme]);
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
    const color = useMemo(() => themeColor === 'default' ? colors.especiales.celeste : Theme.text2, [themeColor]);
    return (<Pressable disabled={!enabled} onPress={_onPress} style={({ pressed }) => [
            styles.button,
            {
                backgroundColor: backgroundColor(pressed),
                borderColor: backgroundColor(true)
            }
        ]}>
            {!isLoading ? (<Text text={text} enabled={enabled} themeColor={themeColor}/>) : (<ActivityIndicator size='small' style={{ margin: 'auto' }} color={color}/>)}
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
        borderWidth: 1,
        boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.1)',
    }
});
