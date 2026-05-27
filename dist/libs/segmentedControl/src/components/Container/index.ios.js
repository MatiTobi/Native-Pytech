import { GlassView } from "expo-glass-effect";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
export default memo(({ children, onLayout, style }) => {
    return (<GlassView glassEffectStyle={'clear'} style={[styles.container, style]} onLayout={onLayout}>
            {children}
        </GlassView>);
});
const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        minHeight: 32,
        overflow: 'hidden',
    }
});
