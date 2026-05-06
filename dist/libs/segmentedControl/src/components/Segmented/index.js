import React, { memo, useState, useRef, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Easing, useSharedValue, withTiming, useDerivedValue } from 'react-native-reanimated';
import { useEffectWithoutFirstRender } from '../../../../../libs/constants/hooks';
import { useShared } from '../../context/shared';
import { scrollToIndex } from '../../utils';
import Container from '../Container';
import Item from '../Item';
import AnimatedChip from '../AnimatedChip';
const anim = {
    duration: 400,
    easing: Easing.bezier(0.2, 0.2, 0, 1)
};
export default memo(({ data, selectedIndex, setCurrentSelectedIndex, isScrollable = true, style, contentContainerStyle, ...itemProps }) => {
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
    // ---------------- Functions ----------------
    const onPress = useCallback((index) => {
        selectedIndexShared.value = withTiming(index, anim);
        setCurrentSelectedIndex(index);
        if (!equalWidthsShared.value)
            scrollToIndex({
                widths: widthsShared.value,
                scrollX: scrollXRef.current,
                containerWidth: widthContainerShared.value,
                scrollRef,
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
    const content = (<>
            <AnimatedChip isScrollable={isScrollable} onFinishedSelectedIndex={(index) => setCurrentSelectedIndex(index)} onChangeEqualWidths={(isEqualWidths) => setEqualWidths(isEqualWidths)} widthsShared={widthsShared} widthContainerShared={widthContainerShared}/>

            {data.map((text, index) => (<Item key={index} text={text} onPress={() => onPress(index)} onLayout={(e) => onLayoutItem(index, e)} {...itemProps}/>))}
        </>);
    return (<Container style={style} onLayout={(e) => widthContainerShared.value = (e.nativeEvent.layout.width - 2 * 2)} // Restamos 4px de margin
    >
            {equalWidths || !isScrollable ? (<View style={[styles.view, contentContainerStyle]}>
                    {content}
                </View>) : (<ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={[styles.contentContainer, contentContainerStyle]} scrollEventThrottle={16} onScroll={e => scrollXRef.current = e.nativeEvent.contentOffset.x}>
                    {content}
                </ScrollView>)}
        </Container>);
});
const styles = StyleSheet.create({
    view: {
        margin: 2,
        flexDirection: 'row',
        flex: 1,
        flexGrow: 1
    },
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
