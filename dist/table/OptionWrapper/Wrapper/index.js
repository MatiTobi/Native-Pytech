import Animated, { Easing, FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import { Platform, View } from 'react-native';
import React, { memo } from 'react';
import Colors from '../../../constants/colors';
import { deviceTier } from '../..';
import { useTable } from '../../context';
import DeleteContext from './contexts/delete';
import BordersContextWrapper from './contexts/borders';
import Borders from './borders';
import Option, { left, right } from './option';
const ViewDelete = memo(({ children, colorScheme, ...props }) => {
    const { colorThemeType } = useTable();
    return (<View style={{ backgroundColor: Colors.table[colorThemeType][colorScheme].background }} {...props}>
            {children}
        </View>);
});
export default memo(({ children, childrenLeft, childrenRight, onPress, onDelete, onDeleteShown, removeWidth, id, style, isAnimated = true, borders = {
    left: left,
    right: right,
    shownTop: null,
    shownBottom: null,
    color: null
}, backgroundColorPressed, LinearGradientProps, layoutAnimation = Platform.OS === 'android' && deviceTier === 'low' ?
    LinearTransition.duration(500) : LinearTransition.easing(Easing.bezier(0.2, 0.2, 0, 1)).duration(600), colorScheme, hasTextView, ...props }) => {
    //console.log('OptionWrapper', id)
    // Restricciones
    if (onDelete && onPress)
        throw new Error('onDelete y onPress no pueden ser usados juntos');
    let content = (<>
        <Option colorScheme={colorScheme} hasTextView={hasTextView} childrenLeft={childrenLeft} childrenRight={childrenRight} onPress={onPress} style={style} backgroundColorPressed={backgroundColorPressed} LinearGradientProps={LinearGradientProps}>
            {children}
        </Option>
        {borders && <Borders id={id} borders={borders}/>}
    </>);
    // onDelete
    content = onDelete ? (<DeleteContext id={id} removeWidth={removeWidth} onDelete={onDelete} onDeleteShown={onDeleteShown}>
            <ViewDelete colorScheme={colorScheme} {...props}>
                {content}
            </ViewDelete>
        </DeleteContext>) : (props ? <View {...props}>{content}</View> : content);
    // Borders
    content = borders && (borders?.shownTop == null || borders?.shownBottom == null) ? (<BordersContextWrapper>
            {content}
        </BordersContextWrapper>) : content;
    if (!isAnimated)
        return content;
    return (<Animated.View layout={layoutAnimation} exiting={FadeOut.duration(100)} entering={FadeIn.duration(100)}>
            {content}
        </Animated.View>);
});
