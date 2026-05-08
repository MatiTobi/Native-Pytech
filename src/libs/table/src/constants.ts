import colorsLib from "@/libs/constants/colors"

export const colors = {
    theme: {
        light: {
            text: colorsLib.light.text,
            text2: colorsLib.light.text2Libretas,
            icon: 'hsl(0, 0%, 76%)',
            borderColorContCliente: 'hsl(240, 2.40%, 92.00%)',
        },
        dark: {
            text: colorsLib.dark.text,
            text2: colorsLib.dark.text2Libretas,
            icon: 'hsl(252, 3%, 35%)',
            borderColorContCliente: 'hsl(252, 3%, 30%)', //'hsl(240, 2%, 22%)',
        }
    },
    especiales: {
        rojo: colorsLib.especiales.rojo
    },
    table: {
        default: {//hsl(240, 2%, 18%)
            light: {
                background: 'hsl(120, 100%, 100%)',
                background_pressed: 'hsl(240, 5%, 83%)',
                border: 'hsl(240, 2%, 91%)'
            },
            dark: {
                background: 'hsl(240, 3%, 10.5%)',
                background_pressed: 'hsl(240, 2%, 22.5%)',
                border: 'hsl(240, 3%, 22.5%)'
            }
        },
        modal: {
            light: {
                background: 'hsl(120, 100%, 100%)',
                background_pressed: 'hsl(240, 5%, 83%)',
                border: 'hsl(240, 2%, 91%)'
            },
            dark: {
                background: 'hsl(240, 2%, 17.5%)',
                background_pressed: 'hsl(240, 2%, 29.5%)',
                border: 'hsl(240, 2%, 25.5%)'
            }
        },
        modal2: {
            light: {
                background: 'hsl(240, 18%, 96%)',
                background_pressed: 'hsl(252, 22%, 79%)',
                border: 'hsl(240, 10%, 88%)'
            },
            dark: {
                background: 'hsl(240, 2%, 17.5%)',
                background_pressed: 'hsl(240, 2%, 29.5%)',
                border: 'hsl(240, 2%, 25.5%)'
            }
        },
        light: {
            light: {
                background: 'hsl(240, 18%, 96%)',
                background_pressed: 'hsl(240, 8%, 91%)',
                border: 'hsl(240, 10%, 88%)'
            },
            dark: {
                background: 'hsl(240, 3%, 10.5%)',
                background_pressed: 'hsl(240, 2%, 22.5%)',
                border: 'hsl(240, 3%, 22.5%)'
            }
        },
        lightBlue: {
            light: {
                background: 'hsl(190, 79%, 94%)',
                background_pressed: 'hsl(190, 82%, 89%)',
                border: ''
            },
            dark: {
                background: 'hsl(194, 62%, 11.5%)',
                background_pressed: 'hsl(193, 62%, 18%)',
                border: ''
            }
        },
        orange: {
            light: {
                background: 'hsl(37, 76.5%, 90%)',
                background_pressed: 'hsl(36, 80%, 85%)',
                border: ''
            },
            dark: {
                background: 'hsl(38, 63.6%, 16.8%)',
                background_pressed: 'hsl(36, 64.6%, 22.3%)',
                border: ''
            }
        },
        full: {
            light: {
                background: 'hsl(0, 0.00%, 100.00%)',
                background_pressed: 'hsl(240, 5%, 83%)',
                border: 'hsl(240, 2%, 91%)'
            },
            dark: {
                background: 'hsl(0, 0.00%, 0.00%)',
                background_pressed: 'hsl(240, 2%, 22.5%)',
                border: 'hsl(240, 3%, 22.5%)'
            }
        },
    }
}


export { type ColorSchemeType } from "@/libs/constants/colors"
export type ColorThemeType = keyof typeof colors.table


export default colors