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
};
export default Props;
