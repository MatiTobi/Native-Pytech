import { GlassView } from "expo-glass-effect";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
export default memo(({ children, onLayout, style }) => {
    return (<GlassView glassEffectStyle={'clear'} style={[styles.segmented, style]} onLayout={onLayout}>
            {children}
        </GlassView>);
});
const styles = StyleSheet.create({
    segmented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    }
});
