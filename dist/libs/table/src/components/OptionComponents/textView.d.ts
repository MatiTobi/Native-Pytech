import React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import Text from './text';
type TextType = (React.ReactElement<typeof Text>);
type Props = {
    children: TextType | TextType[] | React.ReactNode;
    style?: StyleProp<ViewStyle>;
    isSingleLine?: boolean;
};
/**
    Pone el padding según el typeOption.
*/
declare const _default: React.MemoExoticComponent<({ children, style, isSingleLine, ...props }: Props & ViewProps) => React.JSX.Element>;
export default _default;
