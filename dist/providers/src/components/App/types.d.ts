import { ColorSchemeType } from "../../../../constants/colors";
import { Router } from "expo-router";
type Props = {
    /**
     Lista de nombres de los Stacks que se deben renderizar.
     */
    listStackNames?: string[];
    /**
        Función para obtener el color de fondo de las paginas por defecto.
    */
    getBackgroundColor?: ({ colorScheme }: {
        colorScheme: ColorSchemeType;
    }) => string;
    /**
        Función para inicializar la sesión.
        @default true
    */
    getSession?: () => Promise<boolean>;
    /**
     Función para renderizar el item cuando está cargando.
        @default LoginSvg (white | black)
    */
    renderItemLoading?: ({ colorScheme }: {
        colorScheme: ColorSchemeType;
    }) => React.ReactNode;
    /**
        Función para ejecutar cuando se realice el cambio de estado de loading a false.
        Se utiliza para redirigir a la página de inicio.
    */
    onLoadingRealsed?: ({ router, hasSession }: {
        router: Router;
        hasSession: boolean;
    }) => void;
};
export default Props;
