import { ButtonProps } from "@expo/ui/swift-ui";


type Props = {
    /**
        The buttons to be displayed in the dialog.
        @example <Button label="Delete" role="destructive" onPress={() => console.log('Delete')} />
    */
    children?: React.ReactNode

    /**
        The props to be passed to the button that triggers the dialog.
    */
    buttonTriggerProps?: ButtonProps

    /**
        The title of the dialog.
    */
    title?: string

    /**
        The message to be displayed in the dialog.
    */
    message?: string
}

export default Props