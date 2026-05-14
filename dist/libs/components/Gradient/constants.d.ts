export declare const colors: {
    default: {
        dark: string;
        middle: string;
        light: string;
    };
    rojo: {
        dark: string;
        middle: string;
        light: string;
    };
    amarillo: {
        dark: string;
        middle: string;
        light: string;
    };
    azul_oscuro: {
        dark: string;
        middle: string;
        light: string;
    };
    naranja: {
        dark: string;
        middle: string;
        light: string;
    };
    marron_claro: {
        dark: string;
        middle: string;
        light: string;
    };
    verde_agua: {
        dark: string;
        middle: string;
        light: string;
    };
    marron_oscuro: {
        dark: string;
        middle: string;
        light: string;
    };
    rosa: {
        dark: string;
        middle: string;
        light: string;
    };
    azul_claro: {
        dark: string;
        middle: string;
        light: string;
    };
    violeta: {
        dark: string;
        middle: string;
        light: string;
    };
    celeste_oscuro: {
        dark: string;
        middle: string;
        light: string;
    };
    gris: {
        dark: string;
        middle: string;
        light: string;
    };
    celeste_claro: {
        dark: string;
        middle: string;
        light: string;
    };
    verde_oscuro: {
        dark: string;
        middle: string;
        light: string;
    };
    verde_claro: {
        dark: string;
        middle: string;
        light: string;
    };
};
export type Colors = keyof typeof colors;
declare const diameterCircle: {
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    extraExtraLarge: number;
};
export type sizesType = keyof typeof diameterCircle;
export type letterCountType = 1 | 2 | 3;
export declare const sizes: Record<sizesType, {
    diameter: number;
    fontSize: { [key in letterCountType]: number; };
}>;
export default colors;
