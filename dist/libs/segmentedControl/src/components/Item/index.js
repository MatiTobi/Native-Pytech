import React, { memo } from "react";
import { Pressable, StyleSheet } from "react-native";
import Text from "../Text";
export default memo(({ onPress, onLayout, ...props }) => {
    return (<Pressable style={styles.pressable} onPress={onPress} onLayout={onLayout}>
            <Text {...props}/>
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
    }
});
