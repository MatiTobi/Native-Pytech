import type { Observable } from '@legendapp/state';
import Props, { Store } from '../components/Table/types';
export declare const StoreProvider: import("react").Provider<Observable<Store>>, useStore: () => Observable<Store>;
export declare const BordersProvider: import("react").Provider<Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>>>, useBorders: () => Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>>;
export declare const TableProvider: import("react").Provider<{
    colorThemeType: Props["colorThemeType"];
    allBorders: Props["allBorders"];
    type: Props["type"];
    keys: Props["keys"];
    deviceTier: "high" | "medium" | "low";
}>, useTable: () => {
    colorThemeType: Props["colorThemeType"];
    allBorders: Props["allBorders"];
    type: Props["type"];
    keys: Props["keys"];
    deviceTier: "high" | "medium" | "low";
};
