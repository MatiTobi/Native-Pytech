import { type SharedValue } from "react-native-reanimated";
import React from "react";
export type ContextType = {
    selectedIndexShared: SharedValue<number>;
};
export declare const useShared: () => ContextType;
declare const _default: React.MemoExoticComponent<({ children, selectedIndex }: {
    children: React.ReactNode;
    selectedIndex?: number;
}) => React.JSX.Element>;
export default _default;
