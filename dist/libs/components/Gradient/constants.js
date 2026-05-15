export const colors = {
    default: {
        dark: '#7580ba',
        middle: '#7580ba',
        light: '#b1c6e4'
    },
    rojo: {
        dark: '#b12309',
        middle: '#d9543a',
        light: '#ff856a'
    },
    amarillo: {
        dark: '#c97c00',
        middle: '#e4ad1b',
        light: '#ffe535'
    },
    azul_oscuro: {
        dark: '#0f236d',
        middle: '#3d51a0',
        light: '#6a7ec9'
    },
    naranja: {
        dark: '#9c4d00',
        middle: '#ce8430',
        light: '#ffba53'
    },
    marron_claro: {
        dark: '#75582e',
        middle: '#ac9065',
        light: '#e4c79d'
    },
    verde_agua: {
        dark: '#105951',
        middle: '#48928a',
        light: '#80c3ba'
    },
    marron_oscuro: {
        dark: '#4f2a00',
        middle: '#7d5830',
        light: '#aa855a'
    },
    rosa: {
        dark: '#892466',
        middle: '#bd58a1',
        light: '#f08bcc'
    },
    azul_claro: {
        dark: '#334696',
        middle: '#697cd0',
        light: '#9eb1ff'
    },
    violeta: {
        dark: '#482d76',
        middle: '#7a5ea8',
        light: '#ac90d9'
    },
    celeste_oscuro: {
        dark: '#005095',
        middle: '#3790ca',
        light: '#6dbfff'
    },
    gris: {
        dark: '#445255',
        middle: '#7a888b',
        light: '#b0bec1'
    },
    celeste_claro: {
        dark: '#237286',
        middle: '#5daec1',
        light: '#98e7fb'
    },
    verde_oscuro: {
        dark: '#215b1d',
        middle: '#569052',
        light: '#8ac487'
    },
    verde_claro: {
        dark: '#4b5f13',
        middle: '#83974b',
        light: '#bbce82'
    }
};
const diameterCircle = {
    small: 40,
    medium: 45,
    large: 50,
    extraLarge: 100,
    extraExtraLarge: 200
};
export const sizes = Object.fromEntries(Object.entries(diameterCircle).map(([key, value]) => [key, {
        diameter: value,
        fontSize: {
            1: value * 0.53,
            2: value * 0.48,
            3: value * 0.43
        }
    }]));
export default colors;
