import { RefObject } from "react";
import { ScrollView } from "react-native";
export declare const getIndex: (index?: number) => number;
export declare const scrollToIndex: ({ widths, scrollX, containerWidth, scrollRef, index }: {
    widths: number[];
    scrollX: number;
    containerWidth: number;
    scrollRef: RefObject<ScrollView | null>;
    index: number;
}) => void;
