import React, { memo, useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import colors from '../../constants';
import { useApp } from '@/libs/providers/App';
export const selectAll = (input, value) => {
    if (value === null)
        return;
    if (Platform.OS !== 'web')
        input.setSelection(0, value.toString().length);
    else
        input.select();
};
/**
    Pone el color del texto según el tema y agrega unos estilos para que ocupen todo el ancho.
*/
export default memo(({ value, numberOfLines = 1, onFocus, onBlur, onChangeText, mask, ...props }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [rawValue, setRawValue] = useState(value);
    // Determinar el valor visual basado en el estado de foco
    const displayValue = rawValue == null ? null :
        isFocused || !mask
            ? rawValue.toString()
            : mask(rawValue);
    useEffect(() => {
        if (isFocused)
            selectAll(inputRef.current, rawValue);
    }, [isFocused]);
    return (<TextInput style={[styles.textInput, { color: Theme.text }]} ref={inputRef} numberOfLines={numberOfLines} multiline={Platform.OS === 'android'} value={displayValue == null ? '' : displayValue} selectTextOnFocus={true} onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
        }} onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
        }} onChangeText={(text) => {
            setRawValue(text === '' ? null : text);
            onChangeText?.(text);
        }} clearButtonMode='while-editing' {...props}/>);
});
const styles = StyleSheet.create({
    textInput: {
        fontSize: 17,
        flex: 1,
        outlineStyle: 'none', // Le tuve que poner el "as any" porque no existe esta propiedad en dispositivos.
        textAlign: 'right',
    },
});
