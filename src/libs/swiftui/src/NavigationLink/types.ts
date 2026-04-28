import { ButtonProps, TextProps } from "@expo/ui/swift-ui"



export type TrailingProps = {
    /**
        Text to display on the Trailing Stack.
    */
    text?: string
    /**
        TextProps to apply to the Trailing Stack text.
    */
    textProps?: TextProps
}


type Props = ButtonProps & {
    /**
        Text to display on the Trailing Stack.
    */
    textTrailing?: TrailingProps['text']
    /**
        TextProps to apply to the Trailing Stack text.
    */
    textTrailingProps?: TrailingProps['textProps']
}

export default Props;