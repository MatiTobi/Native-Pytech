type Props = {
    /**
        Title of the date picker.
    */
    label?: string;
    /**
        Selection of the date picker.
    */
    selection?: Date | undefined;
    /**
        Minimum date allowed.
    */
    minDate?: Date;
    /**
        Maximum date allowed.
    */
    maxDate?: Date;
    /**
        Callback function to be called when the value changes.
    */
    onValueChange?: (value: Date) => void;
};
export default Props;
