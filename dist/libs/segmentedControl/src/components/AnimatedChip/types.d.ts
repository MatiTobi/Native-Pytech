import React from "react";
import type { SharedValue } from "react-native-reanimated";
type Props = {
    isScrollable: boolean;
    setCurrentSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setEqualWidths: React.Dispatch<React.SetStateAction<boolean>>;
    widthsShared: SharedValue<number[]>;
    widthContainerShared: SharedValue<number>;
};
export default Props;
