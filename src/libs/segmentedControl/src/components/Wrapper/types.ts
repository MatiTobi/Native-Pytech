import { StyleProp, TextStyle, ViewStyle } from "react-native"



type Props = {
    /**
        contentContainerStyle de la ScrollView.
        @default []
    */
    data: string[]

    /**
        Index del item seleccionado.
        @default 0
    */
    selectedIndex?: number

    /**
        Se ejecuta cuando hay un cambio en el index seleccionado.
    */
    onChange?: ({index, item}: {index: number, item: string}) => void

    /**
        Si es false, el componente no será scrollable.
        @default true
    */
    isScrollable?: boolean

    /**
        style del contenedor de la ScrollView.
    */
    style?: StyleProp<ViewStyle>

    /**
        contentContainerStyle de la ScrollView.
    */
    contentContainerStyle?: StyleProp<ViewStyle>

    /**
        style de los textos de los items.
    */
    textStyle?: StyleProp<TextStyle>
}

export default Props