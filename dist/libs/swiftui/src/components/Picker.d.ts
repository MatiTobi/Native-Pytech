import { PickerProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = Omit<PickerProps, 'children'> & {
    /**
        The data items to be rendered inside the picker.
        @default []
    */
    data?: (string | number)[];
};
declare const _default: React.MemoExoticComponent<({ modifiers, data, ...pickerProps }: Props) => React.JSX.Element>;
export default _default;
