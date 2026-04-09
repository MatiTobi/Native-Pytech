import type { Observable } from '@legendapp/state';
import TableProps from './types';
export type TableStore = {
    pressed_id: string | null;
    deleted: {
        setted: boolean;
        id: string | null;
        keys: string[] | undefined;
        lastId: string | null;
        firstId: string | null;
    };
    borders: Map<string, {
        top: (show: boolean) => void;
        bottom: (show: boolean) => void;
    }>;
};
export declare const StoreContext: import("react").Context<Observable<TableStore>>;
export declare const useStore: () => Observable<TableStore>;
export declare const BordersContext: import("react").Context<Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>>>;
export declare const useBorders: () => Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>>;
export declare const TableContext: import("react").Context<{
    colorThemeType: TableProps["colorThemeType"];
    allBorders: TableProps["allBorders"];
    type: TableProps["type"];
    keys: TableProps["keys"];
    deviceTier: "high" | "medium" | "low";
}>;
export declare const useTable: () => {
    colorThemeType: TableProps["colorThemeType"];
    allBorders: TableProps["allBorders"];
    type: TableProps["type"];
    keys: TableProps["keys"];
    deviceTier: "high" | "medium" | "low";
};
