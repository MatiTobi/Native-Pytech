import { ColorSchemeType } from "../../../../constants/colors";
import { Router } from "expo-router";
type Props = {
    /**
        Indica si se debe mostrar el item de loading.
        Por defecto es true.
    */
    isLoading?: boolean;
    /**
        Función para renderizar el item cuando está cargando.
        Por defecto se renderiza LoginSvg (white | black)
    */
    renderItemLoading?: ({ colorScheme }: {
        colorScheme: ColorSchemeType;
    }) => React.ReactNode;
    /**
        Función para ejecutar cuando se realice el cambio de estado de loading a false.
        Se utiliza para redirigir a la página de inicio.
    */
    onLoadingRealsed?: ({ router }: {
        router: Router;
    }) => void;
    /**
        Función para obtener el color de fondo de las paginas por defecto.
    */
    getBackgroundColor?: ({ colorScheme }: {
        colorScheme: ColorSchemeType;
    }) => string;
    /**
        Lista de nombres de los Stacks que se deben renderizar.
    */
    listStackNames?: string[];
};
export default Props;
