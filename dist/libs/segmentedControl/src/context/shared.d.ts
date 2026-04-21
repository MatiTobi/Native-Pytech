import { type SharedValue } from "react-native-reanimated";
export declare const useShared: () => {
    selectedIndexShared: SharedValue<number>;
};
declare const _default: ({ children, selectedIndex }: {
    children: React.ReactNode;
    selectedIndex?: number;
}) => import("react").JSX.Element;
export default _default;
