import React from "react";
import { LayoutChangeEvent } from "react-native";
type Props = {
    item: string;
    onPress: () => void;
    onLayout: (event: LayoutChangeEvent) => void;
};
declare const _default: React.MemoExoticComponent<({ item, onPress, onLayout }: Props) => React.JSX.Element>;
export default _default;
