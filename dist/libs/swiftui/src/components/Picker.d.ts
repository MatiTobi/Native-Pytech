import { PickerProps } from '@expo/ui/swift-ui';
type Props = Omit<PickerProps, 'children'> & {
    /**
        The data items to be rendered inside the picker.
        @default []
    */
    data?: (string | number)[];
};
declare const _default: import("react").MemoExoticComponent<({ modifiers, data, ...pickerProps }: Props) => import("react").JSX.Element>;
export default _default;
