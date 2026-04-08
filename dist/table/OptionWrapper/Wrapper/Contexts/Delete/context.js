"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelete = exports.DeleteContext = void 0;
const react_1 = require("react");
exports.DeleteContext = (0, react_1.createContext)(null);
const useDelete = () => {
    const context = (0, react_1.useContext)(exports.DeleteContext);
    if (!context)
        throw new Error('useDelete debe usarse dentro de un DeleteContext.Provider');
    return context;
};
exports.useDelete = useDelete;
