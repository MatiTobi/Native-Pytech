import React, { memo } from "react"
import { Pressable, StyleSheet } from "react-native"

import type Props from "./types"
import Text from "../Text"



export default memo(({
    onPress,
    onLayout,
    ...props

}: Props) => {

    return (
        <Pressable
            style={styles.pressable}
            onPress={onPress}
            onLayout={onLayout}
        >
            <Text {...props}/>
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
    }
})