import type { RefObject } from "react";
import type PropsWrapper from "../Wrapper/types";
type Props = Omit<PropsWrapper, 'onChange' | 'selectedIndex'> & {
    /**
        selectedIndex del componente.
    */
    selectedIndex: number;
    /**
        Actualiza el index seleccionado.
    */
    setCurrentSelectedIndex: (index: number) => void;
    /**
        Ref al index seleccionado. Para evitar re-renderizaciones.
    */
    currentSelectedIndexRef: RefObject<number>;
};
export default Props;
