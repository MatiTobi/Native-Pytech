import { LabelProps } from '@expo/ui/swift-ui';
type Props = Omit<LabelProps, 'title'> & {
    /**
        Children to display on the right side of the label.
    */
    children?: React.ReactNode;
};
declare const _default: import("react").MemoExoticComponent<({ children, ...labelProps }: Props) => import("react").JSX.Element>;
export default _default;
