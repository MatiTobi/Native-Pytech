import { createContext, useContext, useMemo, useRef } from "react";
const BordersContext = createContext(null);
export const useBorder = () => {
    const context = useContext(BordersContext);
    if (!context)
        throw new Error('useBorder debe usarse dentro de un BordersContext.Provider');
    return context;
};
export default ({ children }) => {
    const bordersRef = useRef({});
    const valueBorders = useMemo(() => (bordersRef), []);
    return (<BordersContext.Provider value={valueBorders}>
            {children}
        </BordersContext.Provider>);
};
