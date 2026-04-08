"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTable = exports.TableContext = exports.useBorders = exports.BordersContext = exports.useStore = exports.StoreContext = void 0;
const react_1 = require("react");
exports.StoreContext = (0, react_1.createContext)(null);
const useStore = () => {
    const store = (0, react_1.useContext)(exports.StoreContext);
    if (!store)
        throw new Error('useStore debe usarse dentro del Provider');
    return store;
};
exports.useStore = useStore;
exports.BordersContext = (0, react_1.createContext)(null);
const useBorders = () => {
    const context = (0, react_1.useContext)(exports.BordersContext);
    if (!context)
        throw new Error('useBorders debe usarse dentro de un BordersContext.Provider');
    return context;
};
exports.useBorders = useBorders;
exports.TableContext = (0, react_1.createContext)({ colorThemeType: 'default', allBorders: true, type: 'default', keys: undefined, deviceTier: 'high' });
const useTable = () => {
    const context = (0, react_1.useContext)(exports.TableContext);
    if (!context) {
        throw new Error('useColorTheme debe usarse dentro de un TableContext.Provider');
    }
    return context;
};
exports.useTable = useTable;
