import React from 'react';
import { BlurEvent, FocusEvent, TextInput, TextInputProps } from 'react-native';
export declare const selectAll: (input: TextInput | any, value: string | null) => void;
/**
    Pone el color del texto según el tema y agrega unos estilos para que ocupen todo el ancho.
*/
declare const _default: React.MemoExoticComponent<({ value, numberOfLines, onFocus, onBlur, onChangeText, mask, ...props }: {
    /**
        Valor inicial del input.
    */
    value?: any;
    /**
        Por default es 1.
    */
    numberOfLines?: number;
    onFocus?: ((e: FocusEvent) => void) | undefined;
    onBlur?: ((e: BlurEvent) => void) | undefined;
    onChangeText?: ((text: string) => void) | undefined;
    /**
        Función para aplicar una máscara al valor del input.
        Ejemplo: {(value) => value ? formatPeso(value) : formatPeso(0)}
    */
    mask?: ((value: any) => string) | undefined;
} & TextInputProps) => React.JSX.Element>;
export default _default;
