import { LabelProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = Omit<LabelProps, 'title'> & {
    /**
        Children to display on the right side of the label.
    */
    children?: React.ReactNode;
};
declare const _default: React.MemoExoticComponent<({ children, ...labelProps }: Props) => React.JSX.Element>;
export default _default;
