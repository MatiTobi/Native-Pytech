
type Props = {
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
}

export default Props