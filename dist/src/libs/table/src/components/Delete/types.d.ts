import React from "react";
export interface DeleteProps {
    /**
        Opcion que se renderiza dentro del context.
    */
    children: React.ReactElement | React.ReactElement[] | null;
    /**
        Id de la opción.
    */
    id: string;
    /**
        Ancho del botón de eliminar.
    */
    removeWidth?: number;
    /**
        Función que se ejecuta al eliminar la opción.
    */
    onDelete?: ((key: string) => void) | undefined;
    /**
        Función que se ejecuta para indicar que el componente se ha eliminado.
    */
    onDeleteShown?: ((id: string, isDeleted: boolean) => void) | undefined;
    /**
        Función que se ejecuta para indicar que el componente se ha eliminado.
    */
    setDeleted: (deleted: boolean) => void;
}
