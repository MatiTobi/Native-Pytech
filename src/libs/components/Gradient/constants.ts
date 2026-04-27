

export const colors = {
    default: {dark: '#7580ba', light: '#b1c6e4'},
    rojo: {dark: '#b12309', light: '#ff856a'},
    amarillo: {dark: '#c97c00', light: '#ffe535'},
    azul_oscuro: {dark: '#0f236d', light: '#6a7ec9'},
    naranja: {dark: '#9c4d00', light: '#ffba53'},
    marron_claro: {dark: '#75582e', light: '#e4c79d'},
    verde_agua: {dark: '#105951', light: '#80c3ba'},
    marron_oscuro: {dark: '#4f2a00', light: '#aa855a'},
    rosa: {dark: '#892466',light: '#f08bcc'},
    azul_claro: {dark: '#334696', light: '#9eb1ff'},
    violeta: {dark: '#482d76', light: '#ac90d9'},
    celeste_oscuro: {dark: '#005095', light: '#6dbfff'},
    gris: {dark: '#445255', light: '#b0bec1'},
    celeste_claro: {dark: '#237286', light: '#98e7fb'},
    verde_oscuro: {dark: '#215b1d', light: '#8ac487'},
    verde_claro: {dark: '#4b5f13', light: '#bbce82'}
}


const diameterCircle = {
    small: 40,
    medium: 45,
    large: 50,
    extraLarge: 200
}

export type sizesType = keyof typeof diameterCircle
export type letterCountType = 1 | 2 | 3

export const sizes = Object.fromEntries(
    Object.entries(diameterCircle).map(([key, value]) => [key, {
        diameter: value,
        fontSize: {
            1: value * 0.53,
            2: value * 0.48,
            3: value * 0.43
        }
    }])
) as Record<sizesType, { diameter: number, fontSize: { [key in letterCountType]: number } }>

export default colors