import { StyleProp, ViewStyle } from "react-native"
import WithIcon from "../WithIcon"


type Props = {
    /**
        Children
    */
    children: React.ReactNode,
    /**
        contentContainerStyle de la ScrollView.
    */
    style?: StyleProp<ViewStyle>
}


export type Component = React.MemoExoticComponent<React.FC<Props>> & {
    WithIcon: typeof WithIcon
}

export default Props