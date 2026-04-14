import { StyleProp, TextInputProps, TextStyle } from "react-native";



type Props = {
    /**
        Texto que aparece como placeholder en el input.
        El valor por defecto es "", no puede ser undefined.
    */
    placeholder?: string;

    /**
        Función asíncrona que se ejecuta cuando se presiona el botón de enviar.
        Tiene que retornar un diccionario con dos propiedades:
        - succeded: boolean
        - message: string
    */
    handleSubmit?: ({value}: {value: string}) => Promise<{succeded: boolean, message: string}>;

    /**
        Si es true, se muestra el botón de enviar.
        El valor por defecto es true.
    */
    buttonSend?: boolean;

    /**
        Mensaje de error que se muestra debajo del input.
    */
    messageError?: string | null;

    /**
        Estilo del mensaje de error.
    */
    styleMessageError?: StyleProp<TextStyle>;

    /**
        Función que se ejecuta cuando se hace focus en el input.
    */
    onFocus?: () => void;

    /**
        Función que se ejecuta cuando se hace blur en el input.
    */
    onBlur?: () => void;

    /**
        Función que se ejecuta cuando se cambia el texto en el input.
    */
    onChangeText?: (text: string) => void;

} & Omit<TextInputProps, 'ref' | 'onChangeText' | 'onFocus' | 'onBlur' | 'onSubmitEditing'>;

export default Props