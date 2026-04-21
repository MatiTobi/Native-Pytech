import React, { memo } from "react"
import { View, StyleSheet } from "react-native"

import Props from './types'
import { useApp } from "libs/providers/App"
import colors from "../../colors"



export default memo(({ children, onLayout, style }: Props) => {

    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]
    
    return (
        <View
            style={[styles.segmented, { backgroundColor: Theme.backgroundColor }, style]}
            onLayout={onLayout}
        >
            {children}
        </View>
    )
})


const styles = StyleSheet.create({
    segmented: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    }
})