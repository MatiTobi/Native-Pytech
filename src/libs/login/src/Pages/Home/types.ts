import { type Props as ScreenProps } from "../../Screen";



type Props = Omit<ScreenProps, 'inputElement' | 'subtitle'> & {
    /**
        Texto que aparece como subtítulo en la página.
        El valor por defecto es "Inicia sesión con un correo electrónico o nombre de usuario para usar la aplicación.".
    */
    subtitle?: string,

    /**
        Texto que aparece como enlace para crear una cuenta.
        El valor por defecto es `Crear tu cuenta de ${title}`.
    */
    textCreateAccount?: string
}

export default Props