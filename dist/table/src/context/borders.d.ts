import { Dispatch, SetStateAction, RefObject } from "react";
declare const useBorder: () => RefObject<Record<string, any> | {
    top: Dispatch<SetStateAction<boolean>>;
    bottom: Dispatch<SetStateAction<boolean>>;
}>;
export { useBorder };
declare const _default: ({ children }: {
    children: React.ReactNode;
}) => import("react").JSX.Element;
export default _default;
