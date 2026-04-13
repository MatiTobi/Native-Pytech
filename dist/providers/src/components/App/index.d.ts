import React from "react";
import { ColorSchemeType } from "../../constants";
import type Props from './types';
declare const useApp: () => {
    colorScheme: ColorSchemeType;
    fontScale: number;
};
export { useApp };
declare const _default: React.MemoExoticComponent<({ renderItemLoading, onLoadingRealsed, getBackgroundColor, listStackNames, getSession }: Props) => React.JSX.Element>;
export default _default;
