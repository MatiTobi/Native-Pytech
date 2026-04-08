"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBorder = void 0;
const react_1 = require("react");
const BordersContext = (0, react_1.createContext)(null);
const useBorder = () => {
    const context = (0, react_1.useContext)(BordersContext);
    if (!context)
        throw new Error('useBorder debe usarse dentro de un BordersContext.Provider');
    return context;
};
exports.useBorder = useBorder;
exports.default = ({ children }) => {
    const bordersRef = (0, react_1.useRef)({});
    const valueBorders = (0, react_1.useMemo)(() => (bordersRef), []);
    return (<BordersContext.Provider value={valueBorders}>
            {children}
        </BordersContext.Provider>);
};
