export declare const colors: {
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
