import { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
type Props = {
    /**
        Children del componente.
    */
    children: React.ReactNode;
    /**
        Función para obtener el ancho del contenedor.
    */
    onLayout: (event: LayoutChangeEvent) => void;
    /**
        Style del contenedor.
    */
    style?: StyleProp<ViewStyle>;
};
export default Props;
