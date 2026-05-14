import React, { memo, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useApp } from "../../../../../../libs/providers/App";
import colors from '../../../constants';
const anim = {
    duration: 400,
    easing: Easing.bezier(0.2, 0.2, 0, 1)
};
export default memo(({ placeholder = '', buttonSend = true, handleSubmit, messageError, onFocus, onChangeText, onBlur, styleMessageError, ...props }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const valueRef = useRef('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(messageError || null);
    const inputRef = useRef(null);
    const animShared = useSharedValue(0);
    // ----------------- Functions-----------------
    const _onFocus = () => {
        setIsFocused(true);
        animShared.value = withTiming(1, { ...anim, duration: 75 });
        onFocus?.();
    };
    const _onBlur = () => {
        setIsFocused(false);
        if (!valueRef.current)
            animShared.value = withTiming(0, { ...anim, duration: 75 });
        onBlur?.();
    };
    const _onChangeText = (text) => {
        valueRef.current = text.toLowerCase();
        onChangeText?.(text);
    };
    const onClickSubmit = () => {
        if (!isLoading) {
            setIsLoading(true);
            _handleSubmit();
        }
    };
    const _handleSubmit = async () => {
        const { succeded, message } = await handleSubmit?.({ value: valueRef.current }) || { succeded: true, message: '' };
        if (!succeded)
            setErrorMessage(message);
        else
            setErrorMessage(null);
        Keyboard.dismiss();
        setIsLoading(false);
    };
    // ----------------- useEffect -----------------
    useEffect(() => {
        setErrorMessage(messageError || null);
    }, [messageError]);
    // ----------------- useAnimatedStyle -----------------
    const animatedStyle = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(animShared.value, [0, 1], [17, 12]),
            paddingTop: interpolate(animShared.value, [0, 1], [15, 5])
        };
    });
    const borderColor = isFocused ? Theme.focus : errorMessage ? Theme.borderColorError : Theme.borderColor5;
    const backgroundColor = errorMessage ? Theme.backgroundColorError : Theme.backgroundColor2;
    return (<View style={{ gap: 10 }}>
            <View onTouchEnd={(e) => e.stopPropagation()} style={[styles.container, { borderColor: borderColor, backgroundColor: backgroundColor }]}>
                <Pressable style={styles.pressable} onPress={() => { inputRef?.current?.focus?.(); }}>

                    <Animated.Text style={[styles.animatedText, { color: errorMessage ? Theme.borderColorError : Theme.borderColor }, animatedStyle]}>
                        {placeholder}
                    </Animated.Text>

                    <TextInput style={[styles.textInput, { color: Theme.text }]} autoCapitalize='none' autoCorrect={false} {...props} ref={inputRef} onChangeText={_onChangeText} onFocus={_onFocus} onBlur={_onBlur} onSubmitEditing={onClickSubmit}/>
                </Pressable>

                {buttonSend && (!isLoading ? (<Pressable style={{ paddingHorizontal: 10 }} onPress={onClickSubmit} onTouchStart={onClickSubmit}>
                            <View style={[styles.viewImage, { borderColor: Theme.borderColor }]}>
                                <Image style={styles.image} tintColor={Theme.borderColor} source={require('../../../../../assets/images/flecha-hacia-abajo.png')}/>
                            </View>
                        </Pressable>) : (<View style={{ paddingHorizontal: 10 }}>
                            <ActivityIndicator size='small' style={{ margin: 'auto' }} color={Theme.borderColor}/>
                        </View>))}
            </View>

            {errorMessage && <Text style={[styles.textError, { color: Theme.borderColorError }, styleMessageError]}>{errorMessage}</Text>}
        </View>);
});
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 12
    },
    pressable: {
        flex: 1,
        position: 'relative',
    },
    animatedText: {
        paddingTop: 15,
        position: 'absolute',
        fontSize: 17,
        margin: 'auto',
        cursor: 'text'
    },
    textInput: {
        outlineStyle: 'none',
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 17,
    },
    viewImage: {
        margin: 'auto',
        borderRadius: '100%',
        borderWidth: 1,
        padding: 5,
        cursor: 'pointer',
    },
    image: {
        margin: 'auto',
        height: 15,
        width: 15,
        transform: [{ rotate: '-90deg' }],
    },
    textError: {
        flex: 1,
        textAlign: 'center',
    }
});
