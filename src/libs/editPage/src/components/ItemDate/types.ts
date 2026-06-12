
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
        Default value of the date picker.
    */
    defaultValue?: Date

    /**
        Minimum date allowed.
        @default 100 years ago
    */
    minDate?: Date

    /**
        Maximum date allowed.
        @default today
    */
    maxDate?: Date

    /**
        Callback function to be called when the value changes.
    */
    onValueChange?: (value: Date) => void
}

export default Props