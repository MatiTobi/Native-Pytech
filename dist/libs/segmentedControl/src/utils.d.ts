import { RefObject } from "react";
import { ScrollView } from "react-native";
export declare const getIndex: (index?: number) => number;
export declare const scrollToIndex: ({ widths, scrollX, containerWidth, scrollRef, prevIndex, index }: {
    widths: number[];
    scrollX: number;
    containerWidth: number;
    scrollRef: RefObject<ScrollView | null>;
    prevIndex: number;
    index: number;
}) => void;
