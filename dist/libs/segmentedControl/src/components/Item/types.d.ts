import { LayoutChangeEvent, StyleProp, TextStyle } from "react-native";
type Props = {
    /**
        Index del item.
        Se utiliza para determinar si el item está seleccionado.
        Sólo cuando unselectedFontBold es False.
    */
    index: number;
    /**
        Texto del item.
    */
    text: string;
    /**
        onPress del Pressable.
    */
    onPress: () => void;
    /**
        onLayout del Pressable.
    */
    onLayout: (event: LayoutChangeEvent) => void;
    /**
        Pone o no en negrita el texto de los items no seleccionados.
        @default true
    */
    unselectedFontBold: boolean;
    /**
        style del texto.
    */
    textStyle?: StyleProp<TextStyle>;
};
export default Props;
