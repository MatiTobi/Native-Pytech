import React, { memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useApp } from "@/libs/providers/App";
import colors from "../../colors";
export default memo(({ text, onPress, onLayout, textStyle, }) => {
    const { colorScheme } = useApp();
    const Theme = colors[colorScheme];
    return (<Pressable style={styles.pressable} onPress={onPress} onLayout={onLayout}>
            <Text numberOfLines={1} style={[styles.text, { color: Theme.text }, textStyle]}>
                {text}
            </Text>
        </Pressable>);
});
const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        overflow: 'hidden',
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
    }
});
