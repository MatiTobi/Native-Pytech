import { createContext, useContext } from 'react';
export const StoreContext = createContext(null);
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context)
        throw new Error('useStore debe usarse dentro del Provider');
    return context;
};
export const BordersContext = createContext(null);
export const useBorders = () => {
    const context = useContext(BordersContext);
    if (!context)
        throw new Error('useBorders debe usarse dentro de un BordersContext.Provider');
    return context;
};
export const TableContext = createContext(null);
export const useTable = () => {
    const context = useContext(TableContext);
    if (!context)
        throw new Error('useTable debe usarse dentro de un TableContext.Provider');
    return context;
};
