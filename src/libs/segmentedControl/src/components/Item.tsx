import React, { memo } from "react"
import { LayoutChangeEvent, Pressable, StyleSheet, Text } from "react-native"

import { useApp } from "libs/providers/App"
import colors from "../colors"



type Props = {
    item: string
    onPress: () => void
    onLayout: (event: LayoutChangeEvent) => void
}


export default memo(({ item, onPress, onLayout }: Props) => {

    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]

    return (
        <Pressable
            style={styles.pressable}
            onPress={onPress}
            onLayout={onLayout}
        >
            <Text numberOfLines={1} style={[styles.text, { color: Theme.text }]}>{item}</Text>
        </Pressable>
    )
})


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
})