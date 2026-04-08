import { Dispatch, SetStateAction } from "react";
import { RefObject } from "react";
export declare const useBorder: () => RefObject<Record<string, any> | {
    top: Dispatch<SetStateAction<boolean>>;
    bottom: Dispatch<SetStateAction<boolean>>;
}>;
declare const _default: ({ children }: {
    children: React.ReactNode;
}) => import("react").JSX.Element;
export default _default;
