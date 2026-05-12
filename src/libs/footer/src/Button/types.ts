

export type TextProps = {
    text: string,
    enabled: boolean,
    themeColor?: 'default' | 'special'
}


export type Props = {
    /**
        Función que se ejecuta cuando se presiona el botón.
        Devuelve true/false si se debe continuar con la acción.
    */
    onPress?: () => boolean | Promise<boolean>,

    /**
        Función que se ejecuta cuando hubo onPress exitoso.
    */
    onSubmit?: () => void,

    /**
        Color de fondo de la página.
        @android
        @web
    */
    backgroundColorPage?: string,
} & TextProps


