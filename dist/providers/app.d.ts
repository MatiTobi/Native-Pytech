import React from "react";
import { ColorSchemeType } from "../constants/colors";
declare const useApp: () => {
    colorScheme: ColorSchemeType;
    fontScale: number;
};
export { useApp };
declare const _default: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export default _default;
