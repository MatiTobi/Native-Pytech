import { type SharedValue } from "react-native-reanimated";
export type ContextType = {
    selectedIndexShared: SharedValue<number>;
};
export declare const useShared: () => ContextType;
declare const _default: ({ children, selectedIndex }: {
    children: React.ReactNode;
    selectedIndex?: number;
}) => import("react").JSX.Element;
export default _default;
