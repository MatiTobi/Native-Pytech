import React, { memo } from "react"
import { StyleSheet, Text, TextProps } from "react-native"
import Animated, { useAnimatedStyle } from "react-native-reanimated"

import { useApp } from "libs/providers/App"
import colors from "../colors"
import { useShared, type ContextType } from "../context/shared"
import type PropsItem from "./Item/types"



export default memo(({
    index,
    text,
    unselectedFontBold,
    textStyle

}: Omit<PropsItem, 'onPress' | 'onLayout'>) => {

    // ---------------- Variables ----------------
    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]

    const props: TextProps = {
        numberOfLines: 1,
        style: [styles.text, { color: Theme.text }, textStyle]
    }

    if (unselectedFontBold) return <Text {...props}>{text}</Text>


    // ---------------- Animated ----------------
    const { selectedIndexShared } = useShared() as ContextType

    const animatedStyle = useAnimatedStyle(() => {
        return {
            fontWeight: selectedIndexShared.value === index ? '600' : '400'
        }
    })

    return (
        <Animated.Text {...props} style={[props.style, animatedStyle]}>
            {text}
        </Animated.Text>
    )
})


const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        fontWeight: '600',
    }
})