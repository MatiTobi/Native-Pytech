import { ButtonProps } from '@expo/ui/swift-ui';
import React from 'react';
import { Props as GradientProps } from 'libs/components/Gradient';
type Props = {
    /**
        The title of the icon section.
    */
    title?: string;
    /**
        The subtitle of the icon section.
    */
    subtitle?: string;
    /**
        If it is given, displays a gradient.
    */
    gradientProps?: {
        text: GradientProps['text'];
        color: GradientProps['color'];
        type: 'extraLarge' | 'extraExtraLarge';
    };
    /**
        If it is given, displays a button.
    */
    buttonProps?: ButtonProps;
};
declare const _default: React.MemoExoticComponent<({ title, subtitle, gradientProps, buttonProps, }: Props) => React.JSX.Element>;
export default _default;
