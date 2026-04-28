import { TextProps } from '@expo/ui/swift-ui';
import React from 'react';
import { Props as NavigationLinkProps } from './Wrapper';
type Props = Omit<NavigationLinkProps, 'children'> & {
    /**
        Children to display on the left.
        If not provided, the title will be displayed.
    */
    children?: React.ReactNode;
    /**
        Text to display on the left.
        Will render if the children are not provided.
    */
    title?: string;
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps;
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string;
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ children, title, titleTextProps, secondaryText, secondaryTextProps, ...navigationLinkProps }: Props) => React.JSX.Element>;
export default _default;
