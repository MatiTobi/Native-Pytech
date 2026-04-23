import colorsLib from "libs/constants/colors";
export const colors = {
    theme: {
        light: {
            text: 'hsl(0, 0%, 0%)',
            text2: 'hsl(0, 0%, 10%)',
            focus: 'hsl(208, 100%, 43.70%)',
            backgroundColor: 'hsl(0, 0%, 100%)',
            backgroundColor2: 'hsl(0, 0%, 100%)',
            backgroundColorError: 'hsl(351, 100%, 97.50%)',
            borderColor: 'rgba(150, 150, 150, 1)',
            borderColor5: 'rgba(150, 150, 150, 0.5)',
            borderColorError: 'hsl(0, 100%, 44.50%)',
            backgroundColorModal2: colorsLib.light.backgroundColorModal2
        },
        dark: {
            text: 'hsl(0, 0%, 100%)',
            text2: 'hsl(0, 0%, 90%)',
            focus: 'hsl(208, 100%, 43.70%)',
            backgroundColor: 'hsl(240, 3.40%, 11.40%)',
            backgroundColor2: 'hsl(240, 2.60%, 14.90%)',
            backgroundColorError: 'hsl(0, 100%, 20%)',
            borderColor: 'rgba(150, 150, 150, 1)',
            borderColor5: 'rgba(150, 150, 150, 0.5)',
            borderColorError: 'hsl(358, 100%, 59.40%)',
            backgroundColorModal2: colorsLib.dark.backgroundColorModal2
        },
    },
    perfil: {
        default: { dark: '#7580ba', light: '#b1c6e4' },
        rojo: { dark: '#b12309', light: '#ff856a' },
        amarillo: { dark: '#c97c00', light: '#ffe535' },
        azul_oscuro: { dark: '#0f236d', light: '#6a7ec9' },
        naranja: { dark: '#9c4d00', light: '#ffba53' },
        marron_claro: { dark: '#75582e', light: '#e4c79d' },
        verde_agua: { dark: '#105951', light: '#80c3ba' },
        marron_oscuro: { dark: '#4f2a00', light: '#aa855a' },
        rosa: { dark: '#892466', light: '#f08bcc' },
        azul_claro: { dark: '#334696', light: '#9eb1ff' },
        violeta: { dark: '#482d76', light: '#ac90d9' },
        celeste_oscuro: { dark: '#005095', light: '#6dbfff' },
        gris: { dark: '#445255', light: '#b0bec1' },
        celeste_claro: { dark: '#237286', light: '#98e7fb' },
        verde_oscuro: { dark: '#215b1d', light: '#8ac487' },
        verde_claro: { dark: '#4b5f13', light: '#bbce82' }
    }
};
export default colors;
