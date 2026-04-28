import { TextProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = {
    /**
        Title to display in the label.
    */
    title?: string;
    /**
        Subtitle to display in the label.
    */
    subtitle?: string;
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps;
    /**
        Props to apply to the subtitle.
    */
    subtitleTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ title, subtitle, titleTextProps, subtitleTextProps }: Props) => React.JSX.Element>;
export default _default;
