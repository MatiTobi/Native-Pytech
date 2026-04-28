import { TextProps } from '@expo/ui/swift-ui';
import React from 'react';
import { Props as NavigationLinkProps } from './Wrapper';
type Props = Omit<NavigationLinkProps, 'children'> & {
    /**
        Children to display on the left.
    */
    children?: React.ReactNode;
    /**
        Secondary text to display on the right.
    */
    secondaryText?: string;
    /**
        Props to apply to the secondary text.
    */
    secondaryTextProps?: TextProps;
};
declare const _default: React.MemoExoticComponent<({ children, secondaryText, secondaryTextProps, ...navigationLinkProps }: Props) => React.JSX.Element>;
export default _default;
