import colors from '../constants';
import { useApp } from "../../../providers/app";
import { memo, useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
export default memo(({ text, enabled, themeColor = 'default' }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const color = useMemo(() => enabled ? (themeColor === 'default' ? colors.especiales.celeste : Theme.text2) : Theme.colorTextButtonFooterDisabled, [enabled, themeColor]);
    return (<Text style={[styles.text, { color: color }]}>
            {text}
        </Text>);
});
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontWeight: '600',
    },
});
