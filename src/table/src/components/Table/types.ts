import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { type ColorThemeType } from '../../constants'
import OptionWrapper from '../OptionWrapper'
import Detail from '../Detail'


type Props = {
    /**
        Opciones de la tabla.
        Tiene que ser una lista de Options.
    */
    children?: (React.ReactElement<typeof OptionWrapper>)[];

    /**
        Texto que aparece arriba de la tabla.
        Si es null, no se muestra.
    */
    title?: string;

    /**
        Item que aparece abajo de la tabla.
        Si es null, no se muestra.
        Tiene que ser un Animated.Text.
    */
    renderDetail?: () => React.ReactNode;

    /**
        Tipo de tema de la tabla.
    */
    colorThemeType?: ColorThemeType;

    /**
        Tipo de tema de la tabla.
        'default' | 'full'.
    */
    type?: 'default' | 'full';

    /**
        Estilos de la contTable.
        Es un Animated.View.
    */
    style?: StyleProp<ViewStyle>;

    /**
        Estilos de la contTable.
        Es un Animated.View.
    */
    contentContainerStyle?: StyleProp<ViewStyle>;

    /**
        Lista de keys de los children. Sirve para el delete.
    */
    keys?: string[] | undefined;

    /**
        Indica si se muestran todos los bordes de las opciones.
        Se muestran todos los bottom y el top del primero
    */
    allBorders?: boolean;
}


export type Component = React.MemoExoticComponent<React.FC<Props>> & {
    Option: typeof OptionWrapper,
    Detail: typeof Detail
}


export type Store = {
	pressed_id: string | null;
	deleted: {
		setted: boolean;
		id: string | null;
		keys: string[] | undefined;
		lastId: string | null;
		firstId: string | null;
	}
	borders: Map<string, {top: (show: boolean) => void, bottom: (show: boolean) => void}>;
}


export default Props