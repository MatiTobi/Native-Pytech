import type { Observable } from '@legendapp/state';
import Props, { Store } from '../components/Table/types';
export declare const StoreProvider: import("react").Provider<Observable<Store> | null>, useStore: () => Observable<Store>;
export declare const BordersProvider: import("react").Provider<Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>> | null>, useBorders: () => Observable<Map<string, {
    top: (show: boolean) => void;
    bottom: (show: boolean) => void;
}>>;
export declare const TableProvider: import("react").Provider<{
    colorThemeType: Exclude<Props["colorThemeType"], undefined>;
    allBorders: Props["allBorders"];
    type: Props["type"];
    keys: Props["keys"];
} | null>, useTable: () => {
    colorThemeType: Exclude<Props["colorThemeType"], undefined>;
    allBorders: Props["allBorders"];
    type: Props["type"];
    keys: Props["keys"];
};
