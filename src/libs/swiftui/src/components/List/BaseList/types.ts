import { ListProps } from "@expo/ui/swift-ui"


type Props = ListProps & {
    /**
        Whether to disable the padding top of the list.
        @default false
    */
    disablePaddingTop?: boolean
}

export default Props