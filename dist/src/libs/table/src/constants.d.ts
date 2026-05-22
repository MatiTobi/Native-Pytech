export declare const colors: {
    theme: {
        light: {
            text: string;
            text2: string;
            icon: string;
            borderColorContCliente: string;
        };
        dark: {
            text: string;
            text2: string;
            icon: string;
            borderColorContCliente: string;
        };
    };
    especiales: {
        rojo: string;
    };
    table: {
        default: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        modal: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        modal2: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        light: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        lightBlue: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        orange: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
        full: {
            light: {
                background: string;
                background_pressed: string;
                border: string;
            };
            dark: {
                background: string;
                background_pressed: string;
                border: string;
            };
        };
    };
};
export { type ColorSchemeType } from "@/libs/constants/colors";
export type ColorThemeType = keyof typeof colors.table;
export default colors;
