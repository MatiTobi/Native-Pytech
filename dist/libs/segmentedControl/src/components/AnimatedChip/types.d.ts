import type { SharedValue } from "react-native-reanimated";
type Props = {
    /**
        Para ver el ancho del chip.
    */
    isScrollable: boolean;
    /**
        Se ejecuta cuando el index seleccionado ha terminado de animar (selectedIndexShared).
        Está dentro de un useAnimatedReaction. Se ejecuta con scheduleOnRN.
    */
    onFinishedSelectedIndex?: (index: number) => void;
    /**
        Se ejecuta cuando cambia el valor de equalWidthsShared.
        Está dentro de un useAnimatedReaction. Se ejecuta con scheduleOnRN.
    */
    onChangeEqualWidths?: (equalWidths: boolean) => void;
    /**
        Usado en el cálculo de equalWidthsShared, leftChipShared, widthChipShared.
        Se utiliza dentro de useDerivedValue.
    */
    widthsShared: SharedValue<number[]>;
    /**
        Usado en el cálculo de equalWidthsShared, leftChipShared, widthChipShared.
        Se utiliza dentro de useDerivedValue.
    */
    widthContainerShared: SharedValue<number>;
};
export default Props;
