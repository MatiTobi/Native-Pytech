import { TextProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = {
    /**
        Children to display on the left.
    */
    children?: React.ReactNode;
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string;
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void;
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ children, secondaryText, secondaryTextProps, onPress, }: Props) => React.JSX.Element>;
export default _default;
