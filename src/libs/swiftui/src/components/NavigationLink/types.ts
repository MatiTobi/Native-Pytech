import { ButtonProps, HStackProps, TextProps } from "@expo/ui/swift-ui"



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
    /**
        false: Renders a Label if systemImage is provided, otherwise put a foregroundStyle(Color.ios.label) modifier.
        @default false
    */
    maintainButtonStyle?: boolean
    /**
        HStackProps to apply to the HStack.
    */
    hStackProps?: Omit<HStackProps, 'children'>
}

export default Props;