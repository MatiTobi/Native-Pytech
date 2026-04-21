import type { StyleProp, ViewStyle } from "react-native"
import type { RefObject } from "react"
import type PropsWrapper from "../Wrapper/types"



type Props = Omit<PropsWrapper, 'onChange'> & {
    /**
        Actualiza el index seleccionado.
    */
    setCurrentSelectedIndex: (index: number) => void
    /**
        Ref al index seleccionado. Para evitar re-renderizaciones.
    */
    currentSelectedIndexRef: RefObject<number>

}

export default Props