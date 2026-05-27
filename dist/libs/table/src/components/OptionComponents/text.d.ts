import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { type ColorSchemeType } from '../../constants';
/**
    Pone el color del texto según el tema.
*/
type Props = {
    text: string;
    /**
        @default true
    */
    enabled?: boolean;
    fontScale?: string;
    /**
        @default {}
    */
    style?: StyleProp<TextStyle>;
};
declare const _default: React.MemoExoticComponent<({ ...props }: Props & {
    colorScheme?: ColorSchemeType;
} & TextProps) => React.JSX.Element>;
export default _default;
