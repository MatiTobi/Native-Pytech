import React from "react";
import { ViewProps } from "react-native";
import { type ColorSchemeType } from "../../constants";
import OptionProps from "../Option/types";
import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from '../OptionComponents';
export type Props = Omit<OptionProps, 'colorScheme'> & {
    id: string;
    /**
        @default false
    */
    isAnimated?: boolean;
    /**
        @default '{ left: left, right: right, shownTop: null, shownBottom: null, color: null }'
    */
    borders?: {
        color: string | null;
        shownTop: boolean | null;
        shownBottom: boolean | null;
        left: number;
        right: number;
    };
} & ViewProps;
export type OptionComponent = React.MemoExoticComponent<React.FC<Props & {
    colorScheme?: ColorSchemeType;
}>> & {
    Components: {
        DeleteIcon: typeof DeleteIcon;
        DragIcon: typeof DragIcon;
        Icon: typeof Icon;
        Image: typeof Image;
        Text: typeof Text;
        TextInput: typeof TextInput;
        TextInputCurrency: typeof TextInputCurrency;
        TextView: typeof TextView;
    };
};
export default Props;
