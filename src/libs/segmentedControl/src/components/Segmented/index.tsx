import React, { memo, useState, useRef, useCallback } from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming, useDerivedValue, useAnimatedReaction } from 'react-native-reanimated'
import { scheduleOnRN } from 'react-native-worklets'

import { useApp } from 'libs/providers/App'
import { useEffectWithoutFirstRender } from 'libs/constants/hooks'

import { useShared } from '../../context/shared'
import { scrollToIndex } from '../../utils'
import colors from '../../colors'
import Container from '../Container'
import Item from '../Item';
import Props from './types'



const anim = {
    duration: 400,
    easing: Easing.bezier(0.2, 0.2, 0, 1)
    //easing: Easing.linear
}


export default memo(({
    data,
    selectedIndex,
    setCurrentSelectedIndex,
    currentSelectedIndexRef,
    style

}: Props) => {

    // ---------------- Variables ----------------
    const { selectedIndexShared } = useShared()

    const [equalWidths, setEqualWidths] = useState(false)

    const widthsRef = useRef<number[]>([])
    const scrollRef = useRef<ScrollView>(null)
    const scrollXRef = useRef<number>(0)

    const widthsShared = useSharedValue<number[]>([])
    const widthContainerShared = useSharedValue<number>(0)


    // ---------------- useDerivedValue ----------------
    const equalWidthsShared = useDerivedValue(() => {
        const widthContainer = widthContainerShared.value
        const widths = widthsShared.value

        const sumWidths = widths.reduce((acc, width) => acc + width, 0)
        return sumWidths <= widthContainer
    })

    const leftChipShared = useDerivedValue(() => {
        const num = selectedIndexShared.value
        const widths = widthsShared.value

        const inferior = Math.floor(num)
        const superior = Math.ceil(num)

        const leftInferior = widths.slice(0, inferior).reduce((acc, width) => acc + (width || 0), 0)
        const leftSuperior = widths.slice(0, superior).reduce((acc, width) => acc + (width || 0), 0)

        const newLeft = interpolate(num, [inferior, superior], [leftInferior, leftSuperior])
        return newLeft
    })

    const widthChipShared = useDerivedValue(() => {
    
        const equalWidths = equalWidthsShared.value
        const widthContainer = widthContainerShared.value

        const num = selectedIndexShared.value
        const widths = widthsShared.value

        if (equalWidths) return widthContainer / widths.length

        const inferior = Math.floor(num)
        const superior = Math.ceil(num)

        const widthInferior = widths[inferior] || 0
        const widthSuperior = widths[superior] || 0

        const newWidth = interpolate(num, [inferior, superior], [widthInferior, widthSuperior])
        return newWidth
    })


    // ---------------- useAnimatedReaction ----------------
    useAnimatedReaction(() => selectedIndexShared.value, (value, prev) => {
        if (prev === value) return
        const hasFinished = Number.isInteger(value)
        if (hasFinished) scheduleOnRN(setCurrentSelectedIndex, value)
    })

    useAnimatedReaction(() => equalWidthsShared.value, (value) => {
        scheduleOnRN(setEqualWidths, value)
    })


    // ---------------- useAnimatedStyle ----------------
    const animatedStyle = useAnimatedStyle(() => {
        return { width: widthChipShared.value, left: leftChipShared.value}
    })


    // ---------------- Functions ----------------
    const onPress = useCallback((index:number) => {
        const prevIndex = currentSelectedIndexRef.current

        selectedIndexShared.value = withTiming(index, anim)
        setCurrentSelectedIndex(index)

        if (!equalWidthsShared.value) scrollToIndex({
            widths: widthsShared.value,
            scrollX: scrollXRef.current,
            containerWidth: widthContainerShared.value,
            scrollRef,
            prevIndex,
            index
        })
    }, [])


    // ---------------- Hooks ----------------
    useEffectWithoutFirstRender(() => {
        onPress(selectedIndex)
    }, [selectedIndex])


    const content = (
        <>
            <Animated.View style={[styles.containerSelected, animatedStyle]}>
                <View style={styles.selected} />
            </Animated.View>

            {data.map((item, index) => (
                <Item
                    index={index}
                    item={item}
                    onPress={() => onPress(index)}
                    onLayout={(e) => {
                        const width = e.nativeEvent.layout.width
                        const newWidths = [...widthsRef.current]
                        
                        newWidths[index] = width
                        widthsRef.current = newWidths
                        widthsShared.value = newWidths
                    }}
                />
            ))}
        </>
    )

    return (
        <Container
            style={style}
            onLayout={(e) => widthContainerShared.value = e.nativeEvent.layout.width}
        >
            {equalWidths ? content :
                <ScrollView
                    ref={scrollRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                    contentContainerStyle={[styles.contentContainer, { flex: equalWidths ? 1 : undefined }]}
                    scrollEventThrottle={16}
                    onScroll={e => scrollXRef.current = e.nativeEvent.contentOffset.x}
                >
                    {content}
                </ScrollView>
            }
        </Container>
    )
})


const styles = StyleSheet.create({

    scrollView: {
        borderRadius: 999,
    },
    contentContainer: {
        flexDirection: 'row',
    },

    containerSelected: {
        position: 'absolute',
        height: '100%',
    },
    selected: {
        flex: 1,
        backgroundColor: 'hsl(0, 0%, 96%)',
        borderRadius: 999,
    },
})