import React from "react";
import Screen from '../Screen'



type Props = {
    /**
        Tiene que ser una lista de <Tab.Screen />.
    */
    children?: (React.ReactElement<typeof Screen>)[];
    /**
        Función para ejecutar cuando se cambia entre páginas.
        En Android se puede usar para ocultar el tabBar.
    */
    onSegmentChange?: ({ segments }: { segments: string[] }) => boolean | void
}


export type Component = React.MemoExoticComponent<React.FC<Props>> & {
    Screen: typeof Screen
}

export default Props