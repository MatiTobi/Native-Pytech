import { ColorSchemeType } from "../../../../constants/colors";
type Props = {
    /**
        Stack de elementos que se deben renderizar dentro del provider.
    */
    children: React.ReactNode;
    /**
        Indica si se debe mostrar el item de loading.
        Por defecto es false.
    */
    isLoading?: boolean;
    /**
        Función para renderizar el item cuando está cargando.
        Por defecto se renderiza LoginSvg (white | black)
    */
    renderItemLoading?: ({ colorScheme }: {
        colorScheme: ColorSchemeType;
    }) => React.ReactNode;
};
export default Props;
