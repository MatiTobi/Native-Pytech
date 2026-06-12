
type Props = {

    /**
        identification key of the item.
    */
    itemKey?: string

    /**
        Title of the date picker.
    */
    label?: string

    /**
        Selection of the date picker.
    */
    selection?: Date

    /**
        The value that applies when selection is undefined.
        @default Date()
    */
    defaultValue?: Date

    /**
        Minimum date allowed.
    */
    minDate?: Date

    /**
        Maximum date allowed.
    */
    maxDate?: Date

    /**
        Callback function to be called when the value changes.
    */
    onValueChange?: (value: Date) => void
}

export default Props