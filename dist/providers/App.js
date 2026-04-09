import { useMemo } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createCtx } from "../constants/utils";
const [Provider, useApp] = createCtx();
export { useApp };
export default ({ children }) => {
    const colorScheme = useColorScheme();
    const { fontScale } = useWindowDimensions();
    const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale]);
    return (<SafeAreaProvider>
            <Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </SafeAreaProvider>);
};
