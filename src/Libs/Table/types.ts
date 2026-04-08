import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import OptionWrapper from './OptionWrapper'



type TableProps = {
    /**
        Opciones de la tabla.
        Tiene que ser una lista de Options.
    */
    children: null | (React.ReactElement<typeof OptionWrapper>)[];

    /**
        Texto que aparece arriba de la tabla.
        Si es null, no se muestra.
    */
    subtitulo?: string;

    /**
        Item que aparece abajo de la tabla.
        Si es null, no se muestra.
        Tiene que ser un Animated.Text.
    */
    itemDetalle?: React.ReactElement<Text>;

    /**
        Tipo de tema de la tabla.
        'default' | 'modal' | 'modal2' | 'light' | 'lightBlue' | 'orange' | 'full'.
    */
    colorThemeType: 'default' | 'modal' | 'modal2' | 'light' | 'lightBlue' | 'orange' | 'full';

    /**
        Tipo de tema de la tabla.
        'default' | 'full'.
    */
    type?: 'default' | 'full';

    /**
        Estilos de la contTable.
        Es un Animated.View.
    */
    styleTable?: StyleProp<ViewStyle>;

    /**
        Estilos de la contTable.
        Es un Animated.View.
    */
    styleTableView?: StyleProp<ViewStyle>;

    /**
        Lista de keys de los children. Sirve para el delete.
    */
    keys?: string[] | undefined;

    /**
        Indica si se muestran todos los bordes de las opciones.
        Se muestran todos los bottom y el top del primero
    */
    allBorders: boolean;
}


export type TableComponent = React.MemoExoticComponent<React.FC<TableProps>> & {
    Option: typeof OptionWrapper
}


export default TableProps