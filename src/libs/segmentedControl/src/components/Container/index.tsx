import React, { memo } from "react"
import { View, StyleSheet } from "react-native"

import Props from './types'
import { useApp } from "@/libs/providers/App"
import colors from "../../colors"



export default memo(({ children, onLayout, style }: Props) => {

    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]
    
    return (
        <View
            style={[styles.container, { backgroundColor: Theme.background }, style]}
            onLayout={onLayout}
        >
            {children}
        </View>
    )
})


const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        minHeight: 32,
        overflow: 'hidden',
    }
})