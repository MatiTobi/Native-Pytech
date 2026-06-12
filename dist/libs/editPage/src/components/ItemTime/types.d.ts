import DatePickerProps from './TimePicker/types';
type Props = Omit<DatePickerProps, 'selection'> & {
    /**
        identification key of the item.
    */
    itemKey?: string;
    /**
        The value that applies when selection is undefined.
        @default Date()
    */
    defaultValue?: Date;
    /**
        Selection of the date picker.
    */
    selection?: Date;
};
export default Props;
