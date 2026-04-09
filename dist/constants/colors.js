/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
const Colors = {
    table: {
        default: {
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
    },
    light: {
        text: 'black',
        textInvert: 'white',
        background: '#fff',
        tint: tintColorLight,
        icon: 'hsl(206, 6.30%, 43.50%)',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
        focusColor: '#0076df',
        text2: 'hsl(0, 0%, 10%)',
        borderColorError: '#e30000',
        backgroundColor2Error: '#fff2f4',
        backgroundColor: 'white',
        backgroundColor2: 'white',
        description: 'hsl(240, 1.70%, 53.30%)',
        borderColor: 'rgba(150, 150, 150, 1)',
        borderColor9: 'rgba(150, 150, 150, 0.9)',
        borderColor8: 'rgba(150, 150, 150, 0.8)',
        borderColor7: 'rgba(150, 150, 150, 0.7)',
        borderColor6: 'rgba(150, 150, 150, 0.6)',
        borderColor5: 'rgba(150, 150, 150, 0.5)',
        borderColor4: 'rgba(150, 150, 150, 0.4)',
        borderColor3: 'rgba(150, 150, 150, 0.3)',
        borderColor2: 'rgba(150, 150, 150, 0.2)',
        borderColor1: 'rgba(150, 150, 150, 0.1)',
        backgroundColor3: '#f1eff5',
        backgroundColorContactos: 'white',
        backgroundColorModal: 'hsl(252, 22%, 95%)',
        backgroundColorModal2: 'white',
        FiltroColorSeleccionado: 'hsl(240, 1.70%, 23.10%)',
        FiltroIconoSeleccionado: 'white',
        FiltroColorNoSeleccionado: 'hsl(0, 0.00%, 91.40%)',
        FiltroIconoNoSeleccionado: '#7d7d7f',
        FiltroColorMensaje: 'hsl(252, 22%, 95%)',
        SearchBar: '#f4f4f4',
        SearchBarText: '#86868a',
        text2Libretas: 'hsl(240, 1%, 55%)',
        contLibretas: 'white',
        contTable: 'white',
        contTableModal: 'white',
        contTableModal2: 'hsl(252, 22%, 95%)',
        contTableLight: 'hsl(252, 22%, 95%)',
        contLibretasPressed: 'hsl(252, 5%, 81%)',
        skeletonGradientStart: 'hsl(0, 0.00%, 100%)',
        skeletonGradientEnd: 'hsl(0, 0.00%, 91.40%)',
        skeletonGradientStart2: 'hsl(0, 0.00%, 80%)',
        skeletonGradientEnd2: 'hsl(0, 0.00%, 70%)',
        pildoraVacia: 'hsl(252, 22%, 95%)',
        contTableLightBlue: 'hsl(190, 79%, 94%)',
        pressableLightBlue: 'hsl(189, 82%, 89%)',
        contTableOrange: 'hsl(37, 76.50%, 90%)',
        pressableOrange: 'hsl(36, 80%, 85%)',
        colorTextButtonFooterEnabled: 'white',
        colorButtonFooterDisabled: 'hsl(0, 0%, 80%)',
        colorTextButtonFooterDisabled: 'hsl(240, 1%, 62%)',
    },
    dark: {
        text: 'white',
        textInvert: 'black',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
        focusColor: '#0076df',
        text2: 'hsl(0, 0%, 90%)',
        borderColorError: '#ff3037',
        backgroundColor2Error: '#300',
        backgroundColor: 'hsl(240, 3.40%, 11.40%)',
        backgroundColor2: 'hsl(240, 2.60%, 14.90%)',
        description: 'hsl(228, 2.70%, 63.30%)',
        borderColor: 'rgba(150, 150, 150, 1)',
        borderColor9: 'rgba(150, 150, 150, 0.9)',
        borderColor8: 'rgba(150, 150, 150, 0.8)',
        borderColor7: 'rgba(150, 150, 150, 0.7)',
        borderColor6: 'rgba(150, 150, 150, 0.6)',
        borderColor5: 'rgba(150, 150, 150, 0.5)',
        borderColor4: 'rgba(150, 150, 150, 0.4)',
        borderColor3: 'rgba(150, 150, 150, 0.3)',
        borderColor2: 'rgba(150, 150, 150, 0.2)',
        borderColor1: 'rgba(150, 150, 150, 0.1)',
        backgroundColor3: '#000000',
        backgroundColorContactos: 'hsl(0, 0%, 0%)',
        backgroundColorModal: 'hsl(240, 3%, 11%)',
        backgroundColorModal2: 'hsl(240, 3%, 11%)',
        FiltroColorSeleccionado: 'white',
        FiltroIconoSeleccionado: 'hsl(240, 3.40%, 11.40%)',
        FiltroColorNoSeleccionado: 'hsl(0, 0.00%, 14.90%)',
        FiltroIconoNoSeleccionado: 'hsl(228, 2.70%, 63.30%)',
        FiltroColorMensaje: 'hsl(0, 0.00%, 14.90%)',
        SearchBar: '#f4f4f4',
        SearchBarText: '#86868a',
        text2Libretas: 'hsl(252, 3%, 62%)',
        contLibretas: 'hsl(240, 3%, 11%)',
        contTable: 'hsl(240, 3%, 11%)',
        contTableModal: 'hsl(240, 2%, 18%)',
        contTableModal2: 'hsl(240, 2%, 18%)',
        contTableLight: 'hsl(240, 2%, 18%)',
        contLibretasPressed: 'hsl(240, 2%, 22%)',
        skeletonGradientStart: 'hsl(0, 0.00%, 14.90%)',
        skeletonGradientEnd: 'hsl(0, 0.00%, 24.90%)',
        skeletonGradientStart2: 'hsl(0, 0.00%, 14.90%)',
        skeletonGradientEnd2: 'hsl(0, 0.00%, 24.90%)',
        pildoraVacia: 'hsl(240, 3%, 11%)',
        contTableLightBlue: 'hsl(195, 62%, 13%)',
        pressableLightBlue: 'hsl(193, 63%, 18%)',
        contTableOrange: 'hsl(38, 63.60%, 17.30%)',
        pressableOrange: 'hsl(36, 64.60%, 22.30%)',
        colorButtonFooterEnabled: 'hsl(208, 99%, 50%)',
        colorTextButtonFooterEnabled: 'white',
        colorButtonFooterDisabled: 'hsl(240, 2%, 26%)',
        colorTextButtonFooterDisabled: 'hsl(240, 1%, 50%)',
        colorButtonFooterEnabledPressed: 'hsl(240, 2%, 22%)',
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
    },
    filtros: {
        azul: 'hsl(208, 75.80%, 57.80%)',
        verde: 'hsl(140, 39.70%, 46.90%)',
        violeta: 'hsl(243, 31.80%, 58.60%)',
        rosa: 'hsl(337, 61.50%, 57.30%)',
        naranja: ' hsl(28, 72.40%, 56.10%)',
        amarillo: 'hsl(48, 64.30%, 45.70%)',
        celeste: 'hsl(190, 65.20%, 53.40%)',
        rojo: 'hsl(3, 97.70%, 65.30%)',
        light: {
            azul_bg: 'hsl(208, 75.80%, 95%)',
            verde_bg: 'hsl(140, 33%, 89%)',
            violeta_bg: 'hsl(244, 33%, 92%)',
            rosa_bg: 'hsl(340, 71%, 92%)',
            naranja_bg: 'hsl(28, 72.40%, 95%)',
            amarillo_bg: 'hsl(48, 64.30%, 95%)',
            celeste_bg: 'hsl(190, 65.20%, 95%)',
        },
        dark: {
            azul_bg: 'hsl(208, 75.80%, 10%)',
            verde_bg: 'hsl(144, 45%, 9%)',
            violeta_bg: 'hsl(240, 21%, 11%)',
            rosa_bg: 'hsl(339, 45%, 11%)',
            naranja_bg: 'hsl(28, 72.40%, 10%)',
            amarillo_bg: 'hsl(48, 64.30%, 10%)',
            celeste_bg: 'hsl(190, 65.20%, 10%)',
        }
    },
    especiales: {
        azul: 'hsl(207, 100%, 50%)',
        rojo: 'hsl(358, 100%, 62%)',
        rosa_claro: 'hsl(329, 86.5%, 74.4%)',
        verde: 'hsl(135, 58.70%, 49.40%)',
        verde_claro: 'hsl(132, 65%, 64%)',
        celeste: 'hsl(179, 100%, 76%)',
        azul_pressed: 'hsl(197, 100%, 50%)',
    }
};
export default Colors;
