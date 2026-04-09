import { createContext, useContext } from 'react';
export const StoreContext = createContext(null);
export const useStore = () => {
    const store = useContext(StoreContext);
    if (!store)
        throw new Error('useStore debe usarse dentro del Provider');
    return store;
};
export const BordersContext = createContext(null);
export const useBorders = () => {
    const context = useContext(BordersContext);
    if (!context)
        throw new Error('useBorders debe usarse dentro de un BordersContext.Provider');
    return context;
};
export const TableContext = createContext({ colorThemeType: 'default', allBorders: true, type: 'default', keys: undefined, deviceTier: 'high' });
export const useTable = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error('useColorTheme debe usarse dentro de un TableContext.Provider');
    }
    return context;
};
