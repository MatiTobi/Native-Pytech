import { LayoutChangeEvent, StyleProp, TextStyle } from "react-native";
type Props = {
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
        style del texto.
    */
    textStyle?: StyleProp<TextStyle>;
};
export default Props;
