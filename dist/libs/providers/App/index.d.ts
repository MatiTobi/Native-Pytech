import { ColorSchemeType } from "../constants";
import type Props from './types';
import './styles.css';
declare const useApp: () => {
    colorScheme: ColorSchemeType;
    fontScale: number;
};
export { useApp };
declare const _default: import("react").MemoExoticComponent<({ listStackNames, getBackgroundColor, getSession, renderItemLoading, onLoadingRealsed, }: Props) => import("react").JSX.Element>;
export default _default;
