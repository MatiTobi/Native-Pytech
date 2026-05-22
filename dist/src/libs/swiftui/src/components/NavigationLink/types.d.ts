import { ButtonProps, LabelProps, TextProps } from "@expo/ui/swift-ui";
export type TrailingProps = {
    /**
        Text to display on the Trailing Stack.
    */
    text?: string;
    /**
        TextProps to apply to the Trailing Stack text.
    */
    textProps?: TextProps;
};
type Props = Pick<ButtonProps, 'children' | 'onPress' | 'systemImage' | 'label'> & {
    /**
        Whether to apply the listRowInsets modifier to the HStack.
        @default false
    */
    listRowInsets?: boolean;
    /**
        Icon to display on the Label.
    */
    icon?: LabelProps['icon'];
    /**
        Text to display on the Trailing Stack.
    */
    trailingText?: TrailingProps['text'];
    /**
        TextProps to apply to the Trailing Stack text.
    */
    trailingTextProps?: TrailingProps['textProps'];
};
export default Props;
