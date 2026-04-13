import React, { memo, useMemo } from "react";
import { useColorScheme, useWindowDimensions, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { handleFontObserver } from '../../../../constants/handleFontObserver';
handleFontObserver(); // esto intercepta todos los timeouts de fuentes
import { createCtx } from "../../../../constants/utils";
import colors from "../../constants";
const [Provider, useApp] = createCtx();
export { useApp };
export default memo(({ children, }) => {
    const colorScheme = useColorScheme();
    const Theme = colors[colorScheme];
    const { fontScale } = useWindowDimensions();
    const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale]);
    return (<SafeAreaProvider>
            <Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </SafeAreaProvider>);
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
