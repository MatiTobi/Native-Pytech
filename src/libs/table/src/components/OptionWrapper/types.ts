import React from "react";
import { ViewProps } from "react-native";

import { type ColorSchemeType } from "../../constants"
import OptionProps from "../Option/types"

import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from '../OptionComponents'



export type Props = OptionProps & {

    id: string,
    isAnimated: boolean,

    /**
        Borde de la opción.
        Es un dict con { left: 17, right: 16 } por defecto.
    */
    borders: { color: string | null, shownTop: boolean | null, shownBottom: boolean | null, left: number, right: number } | undefined,

} & ViewProps


export type OptionComponent = React.MemoExoticComponent<React.FC<Props & {colorScheme?: ColorSchemeType}>> & {
    Components: {
        DeleteIcon: typeof DeleteIcon
        DragIcon: typeof DragIcon
        Icon: typeof Icon
        Image: typeof Image
        Text: typeof Text,
        TextInput: typeof TextInput
        TextInputCurrency: typeof TextInputCurrency
        TextView: typeof TextView
    }
}


export default Props