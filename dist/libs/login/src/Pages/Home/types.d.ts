import { type Props as ScreenProps } from "../../Screen";
type Props = Omit<ScreenProps, 'inputElement' | 'subtitle'> & {
    /**
        Texto que aparece como subtítulo en la página.
        @default "Inicia sesión con un correo electrónico o nombre de usuario para usar la aplicación."
    */
    subtitle?: string;
    /**
        Texto que aparece como enlace para crear una cuenta.
        @default "Crear tu cuenta de ${title}"
    */
    textCreateAccount?: string;
    /**
        Nombre del esquema de la base de datos.
        @default "admin"
    */
    supabaseSchema?: string;
    /**
        Nombre de la tabla de la base de datos.
        @default "perfiles"
    */
    supabaseTable?: string;
    /**
        Indica si se debe mostrar el botón para crear una cuenta.
        @default false
    */
    enableCreateAccount?: boolean;
};
export default Props;
