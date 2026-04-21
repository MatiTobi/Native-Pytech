import { GlassView } from "expo-glass-effect"
import React, { memo } from "react"
import { StyleSheet } from "react-native"

import Props from './types'



export default memo(({ children, onLayout, style }: Props) => {
    return (
        <GlassView
            glassEffectStyle={'clear'}
            style={[styles.segmented, style]}
            onLayout={onLayout}
            //isInteractive={true}
        >
            {children}
        </GlassView>
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