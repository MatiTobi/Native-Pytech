import { keyboardType } from "@expo/ui/swift-ui/modifiers";
type Props = {
    /**
        Default value of the text field.
    */
    defaultValue?: string;
    /**
        Placeholder of the text field.
    */
    placeholder?: string;
    /**
        Keyboard type. Uses the keyboardType modifier.
    */
    keyboardType?: Parameters<typeof keyboardType>[0];
    /**
        If true, the text field will be autocapitalized. Uses the textInputAutocapitalization modifier.
        @default true
    */
    autocapitalization?: boolean;
    /**
        If true, the text field will be secure (password).
    */
    secureTextEntry?: boolean;
    /**
        Function to validate the value.
    */
    isValid?: (value: string | null) => boolean;
};
export default Props;
