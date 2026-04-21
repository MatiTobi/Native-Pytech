import React, { memo, useState, useRef, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming, useDerivedValue, useAnimatedReaction } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useEffectWithoutFirstRender } from '../../../../../libs/constants/hooks';
import { useShared } from '../../context/shared';
import { scrollToIndex } from '../../utils';
import Container from '../Container';
import Item from '../Item';
const anim = {
    duration: 400,
    easing: Easing.bezier(0.2, 0.2, 0, 1)
    //easing: Easing.linear
};
export default memo(({ data, selectedIndex, setCurrentSelectedIndex, currentSelectedIndexRef, isScrollable = true, style, contentContainerStyle, unselectedFontBold = true, ...itemProps }) => {
    // ---------------- Variables ----------------
    const { selectedIndexShared } = useShared();
    const [equalWidths, setEqualWidths] = useState(false);
    const widthsRef = useRef([]);
    const scrollRef = useRef(null);
    const scrollXRef = useRef(0);
    const widthsShared = useSharedValue([]);
    const widthContainerShared = useSharedValue(0);
    // ---------------- useDerivedValue ----------------
    const equalWidthsShared = useDerivedValue(() => {
        if (!isScrollable)
            return true;
        const widthContainer = widthContainerShared.value;
        const widths = widthsShared.value;
        const sumWidths = widths.reduce((acc, width) => acc + width, 0);
        return sumWidths <= widthContainer;
    });
    const idxInferiorShared = useDerivedValue(() => Math.floor(selectedIndexShared.value));
    const idxSuperiorShared = useDerivedValue(() => Math.ceil(selectedIndexShared.value));
    const leftChipShared = useDerivedValue(() => {
        const widths = widthsShared.value;
        const inferior = idxInferiorShared.value;
        const superior = idxSuperiorShared.value;
        const leftInferior = widths.slice(0, inferior).reduce((acc, width) => acc + (width || 0), 0);
        const leftSuperior = widths.slice(0, superior).reduce((acc, width) => acc + (width || 0), 0);
        const newLeft = interpolate(selectedIndexShared.value, [inferior, superior], [leftInferior, leftSuperior]);
        return newLeft;
    });
    const widthChipShared = useDerivedValue(() => {
        const widths = widthsShared.value;
        if (equalWidthsShared.value)
            return widthContainerShared.value / widths.length;
        const inferior = idxInferiorShared.value;
        const superior = idxSuperiorShared.value;
        const widthInferior = widths[inferior] || 0;
        const widthSuperior = widths[superior] || 0;
        const newWidth = interpolate(selectedIndexShared.value, [inferior, superior], [widthInferior, widthSuperior]);
        return newWidth;
    });
    // ---------------- useAnimatedReaction ----------------
    useAnimatedReaction(() => selectedIndexShared.value, (value, prev) => {
        if (prev === value)
            return;
        const hasFinished = Number.isInteger(value);
        if (hasFinished)
            scheduleOnRN(setCurrentSelectedIndex, value);
    });
    useAnimatedReaction(() => equalWidthsShared.value, (value) => {
        scheduleOnRN(setEqualWidths, value);
    });
    // ---------------- useAnimatedStyle ----------------
    const animatedStyle = useAnimatedStyle(() => {
        return { width: widthChipShared.value, left: leftChipShared.value };
    });
    // ---------------- Functions ----------------
    const onPress = useCallback((index) => {
        const prevIndex = currentSelectedIndexRef.current;
        selectedIndexShared.value = withTiming(index, anim);
        setCurrentSelectedIndex(index);
        if (!equalWidthsShared.value)
            scrollToIndex({
                widths: widthsShared.value,
                scrollX: scrollXRef.current,
                containerWidth: widthContainerShared.value,
                scrollRef,
                prevIndex,
                index
            });
    }, []);
    const onLayoutItem = useCallback((index, e) => {
        const width = e.nativeEvent.layout.width;
        const newWidths = [...widthsRef.current];
        newWidths[index] = width;
        widthsRef.current = newWidths;
        widthsShared.value = newWidths;
    }, []);
    // ---------------- Hooks ----------------
    useEffectWithoutFirstRender(() => {
        onPress(selectedIndex);
    }, [selectedIndex]);
    return (<Container style={style} onLayout={(e) => widthContainerShared.value = e.nativeEvent.layout.width}>
            <ScrollView ref={scrollRef} horizontal={!equalWidths} showsHorizontalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={[styles.contentContainer, { flex: equalWidths ? 1 : undefined }, contentContainerStyle]} scrollEventThrottle={16} onScroll={e => scrollXRef.current = e.nativeEvent.contentOffset.x}>
                <Animated.View style={[styles.containerSelected, animatedStyle]}>
                    <View style={styles.selected}/>
                </Animated.View>

                {data.map((text, index) => (<Item key={index} index={index} text={text} onPress={() => onPress(index)} onLayout={(e) => onLayoutItem(index, e)} unselectedFontBold={unselectedFontBold} {...itemProps}/>))}
                
            </ScrollView>
        </Container>);
});
const styles = StyleSheet.create({
    scrollView: {
        margin: 2,
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
});
