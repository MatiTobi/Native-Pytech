import { createContext, useContext } from 'react';
export const DeleteContext = createContext(null);
export const useDelete = () => {
    const context = useContext(DeleteContext);
    if (!context)
        throw new Error('useDelete debe usarse dentro de un DeleteContext.Provider');
    return context;
};
