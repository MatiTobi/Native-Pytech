import colorsLib from "libs/constants/colors"

const colors = {
    theme: {
        light: {
            text2: colorsLib.light.text2Libretas,
    
            colorButtonFooterDisabled: 'hsl(0, 0%, 80%)',
            colorTextButtonFooterDisabled: 'hsl(240, 1%, 62%)',
        },
        dark: {
            text2: colorsLib.dark.text2Libretas,
    
            colorButtonFooterDisabled: 'hsl(240, 2%, 26%)',
            colorTextButtonFooterDisabled: 'hsl(240, 1%, 50%)',
        }
    },
    especiales: {
        azul: colorsLib.especiales.azul,
        celeste: colorsLib.especiales.celeste,
        azul_pressed: colorsLib.especiales.azul_pressed
    }
}

export default colors