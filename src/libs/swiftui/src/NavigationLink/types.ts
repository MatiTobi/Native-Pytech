import { ButtonProps, TextProps } from "@expo/ui/swift-ui"



export type RightProps = {
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps
}


type Props = ButtonProps & RightProps

export default Props;