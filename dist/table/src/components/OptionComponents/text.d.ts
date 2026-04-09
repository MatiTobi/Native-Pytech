import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { type ColorSchemeType } from '../../constants';
/**
    Pone el color del texto según el tema.
*/
type Props = {
    texto: string;
    enabled: boolean;
    fontScale?: string;
    style: StyleProp<TextStyle>;
};
declare const _default: React.MemoExoticComponent<({ ...props }: Props & {
    colorScheme?: ColorSchemeType;
} & TextProps) => React.JSX.Element>;
export default _default;
