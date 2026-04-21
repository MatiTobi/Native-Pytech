import { StyleProp, ViewStyle } from "react-native"



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
        contentContainerStyle de la ScrollView.
    */
    style?: StyleProp<ViewStyle>
}

export default Props