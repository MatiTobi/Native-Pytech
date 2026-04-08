"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApp = void 0;
const react_1 = require("react");
const react_2 = require("react");
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const native_1 = require("@react-navigation/native");
const App = (0, react_2.createContext)(null);
const useApp = () => {
    const context = (0, react_1.useContext)(App);
    if (!context)
        throw new Error('useApp must be used within an App.Provider');
    return context;
};
exports.useApp = useApp;
exports.default = ({ children }) => {
    const colorScheme = (0, react_native_1.useColorScheme)();
    const { fontScale } = (0, react_native_1.useWindowDimensions)();
    const value = (0, react_1.useMemo)(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale]);
    return (<react_native_safe_area_context_1.SafeAreaProvider>
            <App.Provider value={value}>
                <native_1.ThemeProvider value={colorScheme === 'dark' ? native_1.DarkTheme : native_1.DefaultTheme}>
                    {children}
                </native_1.ThemeProvider>
            </App.Provider>
        </react_native_safe_area_context_1.SafeAreaProvider>);
};
