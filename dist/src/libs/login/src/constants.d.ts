export declare const colors: {
    theme: {
        light: {
            text: string;
            text2: string;
            focus: string;
            backgroundColor: string;
            backgroundColor2: string;
            backgroundColorError: string;
            borderColor: string;
            borderColor5: string;
            borderColorError: string;
            backgroundColorModal2: string;
        };
        dark: {
            text: string;
            text2: string;
            focus: string;
            backgroundColor: string;
            backgroundColor2: string;
            backgroundColorError: string;
            borderColor: string;
            borderColor5: string;
            borderColorError: string;
            backgroundColorModal2: string;
        };
    };
    perfil: {
        default: {
            dark: string;
            light: string;
        };
        rojo: {
            dark: string;
            light: string;
        };
        amarillo: {
            dark: string;
            light: string;
        };
        azul_oscuro: {
            dark: string;
            light: string;
        };
        naranja: {
            dark: string;
            light: string;
        };
        marron_claro: {
            dark: string;
            light: string;
        };
        verde_agua: {
            dark: string;
            light: string;
        };
        marron_oscuro: {
            dark: string;
            light: string;
        };
        rosa: {
            dark: string;
            light: string;
        };
        azul_claro: {
            dark: string;
            light: string;
        };
        violeta: {
            dark: string;
            light: string;
        };
        celeste_oscuro: {
            dark: string;
            light: string;
        };
        gris: {
            dark: string;
            light: string;
        };
        celeste_claro: {
            dark: string;
            light: string;
        };
        verde_oscuro: {
            dark: string;
            light: string;
        };
        verde_claro: {
            dark: string;
            light: string;
        };
    };
};
export type ColorSchemeType = 'light' | 'dark';
export type ThemeType = typeof colors['theme']['light'];
export type PerfilColorType = keyof typeof colors['perfil'];
export default colors;
