import { type SpacerProps } from "@expo/ui/swift-ui"
import type TextFieldProps from '../TextField/types';


type Props = TextFieldProps & {

    /**
        Text to display on the left of the text field.
        If not provided, the item will be only a text field.
    */
    label?: string

    /**
        Minimum length of the spacer between the title and the text field.
        If the title is not provided, will not be displayed.
    */
    minLengthSpacer?: SpacerProps['minLength']
}

export default Props