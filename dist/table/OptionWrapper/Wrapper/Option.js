import { LinearGradient } from 'expo-linear-gradient';
import React, { memo, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Colors from '../../../constants/colors';
import Table from '../..';
import { useTable } from '../../context';
export const left = 16;
export const right = 16;
const flattenChildren = (children) => {
    return React.Children.toArray(children).flatMap((child) => {
        if (React.isValidElement(child) && child.type === React.Fragment) {
            const props = child.props;
            return flattenChildren(props.children);
        }
        return [child];
    });
};
const AddTextView = memo(({ children, hasTextView }) => {
    const hasTextView_ = hasTextView ?? flattenChildren(children).some((child) => React.isValidElement(child) && child.type === Table.Option.Components.TextView);
    const childrenLeft = <View style={styles.izq}>{children}</View>;
    if (hasTextView_)
        return childrenLeft;
    return (<Table.Option.Components.TextView>
            {childrenLeft}
        </Table.Option.Components.TextView>);
});
export default memo(({ children, childrenLeft, childrenRight, onPress, style, backgroundColorPressed, LinearGradientProps, colorScheme, hasTextView, }) => {
    // Component
    const content = <>
        {childrenLeft && <AddTextView hasTextView={hasTextView}>{childrenLeft}</AddTextView>}
        {childrenRight && <View style={styles.der}>{childrenRight}</View>}
        {children}
    </>;
    const styleView = useMemo(() => [styles.Item_View, style], [style]);
    const childrenOption = onPress === undefined ? <View style={styleView}>{content}</View>
        : (backgroundColorPressed ? (<Pressable onPress={onPress} style={({ pressed }) => !pressed ? styleView : [styleView, { backgroundColor: backgroundColorPressed }]}>
                {content}
            </Pressable>) : (<PressableView onPress={onPress} colorScheme={colorScheme} styleView={styleView}>
                {content}
            </PressableView>));
    return (LinearGradientProps ?
        <LinearGradient {...LinearGradientProps}>
                {childrenOption}
            </LinearGradient>
        : childrenOption);
});
const PressableView = memo(({ children, onPress, colorScheme, styleView }) => {
    const { colorThemeType } = useTable();
    return (<Pressable onPress={onPress} style={({ pressed }) => !pressed ? styleView : [styleView, { backgroundColor: Colors.table[colorThemeType][colorScheme].background_pressed }]}>
            {children}
        </Pressable>);
});
/*
 const pressableChildren = useCallback(({ pressed }: { pressed: boolean }) => (
        <>
            {!pressed ?
                <NotPressedView /> :
                <OnPressView backgroundColorPressed={backgroundColorPressed} colorScheme={colorScheme} />
            }
            {content}
        </>
    ), [backgroundColorPressed, content, colorScheme])

const NotPressedView = memo(() => <View style={styles.onPressView} />)
const OnPressView = memo(({ backgroundColorPressed, colorScheme }: { backgroundColorPressed: OptionProps['backgroundColorPressed'], colorScheme: ColorSchemeType }) => {
    const { colorThemeType } = useTable()
    return <View style={[styles.onPressView, { backgroundColor: backgroundColorPressed ? backgroundColorPressed : Colors.table[colorThemeType][colorScheme].background_pressed }]} />

})
*/
//(20.3 - 0.5) / 2 = 9.9
//const paddingVertical = (24.1 - paddingTopItem - gap) / 2
//console.log('paddingVertical', paddingVertical)
const styles = StyleSheet.create({
    Item_View: {
        flex: 1,
        paddingLeft: left,
        paddingRight: right,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    izq: {
        marginRight: 'auto',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 11,
        //paddingBottom: 2,
    },
    der: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 11
    },
    onPressView: {
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent'
    }
});
