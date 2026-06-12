import DatePickerProps from './DatePicker/types';

type Props = DatePickerProps & {
    /**
        identification key of the item.
    */
    itemKey?: string

    /**
        The value that applies when selection is undefined.
        @default Date()
    */
    defaultValue?: Date
}

export default Props