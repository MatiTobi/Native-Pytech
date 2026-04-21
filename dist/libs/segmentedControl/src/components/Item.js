import React, { memo } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useApp } from "../../../../libs/providers/App";
import colors from "../colors";
export default memo(({ index, item, onPress, onLayout }) => {
    const { colorScheme } = useApp();
    const Theme = colors[colorScheme];
    return (<Pressable key={index} style={styles.pressable} onPress={onPress} onLayout={onLayout}>
            <Text numberOfLines={1} style={[styles.text, { color: Theme.text2 }]}>{item}</Text>
        </Pressable>);
});
const styles = StyleSheet.create({
    pressable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        overflow: 'hidden',
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
    }
});
