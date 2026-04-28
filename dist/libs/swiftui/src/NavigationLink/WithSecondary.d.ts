import { TextProps, LabelProps, ButtonProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = LabelProps & {
    /**
        Children to display on the left.
        If not provided, the label will be displayed.
    */
    children?: React.ReactNode;
    /**
        Function to navigate to the destination page.
    */
    onPress?: ButtonProps['onPress'];
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string;
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ children, onPress, secondaryText, secondaryTextProps, ...labelProps }: Props) => React.JSX.Element>;
export default _default;
