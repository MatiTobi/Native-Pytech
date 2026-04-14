import { LinearGradientProps } from 'expo-linear-gradient';
import React from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import { LinearTransition } from "react-native-reanimated";
import { type ColorSchemeType } from "../../constants";
type Props = {
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
};
export default Props;
