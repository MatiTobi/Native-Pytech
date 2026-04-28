import { TextProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = {
    /**
        Text to display on the left.
    */
    title?: string;
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string;
    /**
        Function to navigate to the destination page.
    */
    onPress?: () => void;
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps;
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ title, secondaryText, titleTextProps, secondaryTextProps, onPress, }: Props) => React.JSX.Element>;
export default _default;
