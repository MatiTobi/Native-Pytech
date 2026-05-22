import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, useAnimatedReaction } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useApp } from '@/libs/providers/App';
import { useShared } from '../../context/shared';
import colors from '../../colors';
export default memo(({ isScrollable, onFinishedSelectedIndex, onChangeEqualWidths, widthsShared, widthContainerShared }) => {
    // ---------------- Variables ----------------
    const { colorScheme } = useApp();
    const Theme = colors[colorScheme];
    const { selectedIndexShared } = useShared();
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
        // Los widths son iguales
        if (equalWidthsShared.value) {
            const width = widthContainerShared.value / widths.length;
            const newLeft = interpolate(selectedIndexShared.value, [inferior, superior], [inferior * width, superior * width]);
            return newLeft;
        }
        // Varian los widths
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
        if (hasFinished && onFinishedSelectedIndex)
            scheduleOnRN(onFinishedSelectedIndex, value);
    });
    useAnimatedReaction(() => equalWidthsShared.value, (value) => {
        onChangeEqualWidths && scheduleOnRN(onChangeEqualWidths, value);
    });
    // ---------------- useAnimatedStyle ----------------
    const animatedStyle = useAnimatedStyle(() => {
        return { width: widthChipShared.value, left: leftChipShared.value };
    });
    return (<Animated.View style={[styles.container, animatedStyle]}>
            <View style={[styles.chip, { backgroundColor: Theme.chip }]}/>
        </Animated.View>);
});
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
    },
    chip: {
        flex: 1,
        borderRadius: 999,
    },
});
