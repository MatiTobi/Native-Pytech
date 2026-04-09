import { LinearGradientProps } from 'expo-linear-gradient';
import React from "react";
import { GestureResponderEvent, StyleProp, ViewProps, ViewStyle } from "react-native";
import { LinearTransition } from "react-native-reanimated";

import { type ColorSchemeType } from "../../constants/colors"

import {DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView} from './components'



type OptionProps = {

    /**
        Lo que se va a renderizar dentro de la opción.
    */
    children?: React.ReactElement;

    /**
        Lo que se va a renderizar dentro de la view de la izquierda.
    */
    childrenLeft?: React.ReactElement | null;

    /**
        Lo que se va a renderizar dentro de la view de la derecha.
    */
    childrenRight?: React.ReactElement | null;

    /**
        Función que se ejecuta al presionar la opción.
    */
    onPress?: ((event: GestureResponderEvent) => void) | undefined;

    /**
        Función que se ejecuta al eliminar la opción.
    */
    onDelete?: ((key: string) => void) | undefined;

    /**
        Función que se ejecuta para indicar que el componente se ha eliminado.
    */
    onDeleteShown?: ((id: string, isDeleted: boolean) => void) | undefined;

    /**
        Ancho del botón de eliminar.
    */
    removeWidth?: number;

    /**
        Estilos de la opción.
        Es un Animated.View.
    */
    style?: StyleProp<ViewStyle>;

    /**
        Color de fondo de la opción cuando está presionada.
    */
    backgroundColorPressed?: string;

    /**
        Props para el LinearGradient.
    */
    LinearGradientProps?: LinearGradientProps;

    /**
        LayoutAnimation de la opción.
    */
    layoutAnimation?: LinearTransition;

    /**
        Indica si la opción tiene un TextView en el childrenLeft.
    */
    hasTextView?: boolean;

    /**
     * Color del tema de la opción.
    */
    colorScheme: ColorSchemeType;
    
}


export type OptionWrapperProps = OptionProps & {

    id: string,
    isAnimated: boolean,

    /**
        Borde de la opción.
        Es un dict con { left: 17, right: 16 } por defecto.
    */
    borders: { color: string | null, shownTop: boolean | null, shownBottom: boolean | null, left: number, right: number } | undefined,

} & ViewProps


export type OptionComponent = React.MemoExoticComponent<React.FC<OptionWrapperProps & {colorScheme?: ColorSchemeType}>> & {
    Components: {
        DeleteIcon: typeof DeleteIcon
        DragIcon: typeof DragIcon
        Icon: typeof Icon
        Image: typeof Image
        Text: typeof Text,
        TextInput: typeof TextInput
        TextInputCurrency: typeof TextInputCurrency
        TextView: typeof TextView
    }
}


export default OptionProps