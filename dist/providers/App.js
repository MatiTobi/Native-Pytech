import { useContext, useMemo } from "react";
import { createContext } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
const context = createContext(null);
export const useApp = () => {
    const ctx = useContext(context);
    if (!ctx)
        throw new Error('useApp must be used within an AppProvider');
    return ctx;
};
export default ({ children }) => {
    const colorScheme = useColorScheme();
    const { fontScale } = useWindowDimensions();
    const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale]);
    return (<SafeAreaProvider>
            <context.Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </context.Provider>
        </SafeAreaProvider>);
};
