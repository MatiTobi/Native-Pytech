import React, { memo } from 'react';
import TextInputOption from './textInput';
export function formatPeso(value) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0, // <- no obliga decimales
        maximumFractionDigits: 2 // <- si vienen, los respeta
    }).format(Number(value));
}
/**
    Se utiliza específicamente para formatear el valor del input a pesos.
    Utiliza el componente de TextInputOption.
*/
export default memo(({ ...props }) => {
    return (<TextInputOption keyboardType='numeric' autoCapitalize='none' autoCorrect={false} placeholder={'$0'} mask={(value) => value ? formatPeso(value) : formatPeso(0)} {...props}/>);
});
