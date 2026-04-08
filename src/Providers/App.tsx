import { useContext, useMemo } from "react"
import { createContext } from "react"
import { useColorScheme, useWindowDimensions } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { ColorSchemeType } from "reactNative/colors"



const App = createContext<{ colorScheme: ColorSchemeType, fontScale: number } | null>(null)
export const useApp = () => {
	const context = useContext(App)
	if (!context) throw new Error('useApp must be used within an App.Provider')
	return context
}

export default ({ children }: { children: React.ReactNode }) => {

    const colorScheme = useColorScheme() as ColorSchemeType
	const { fontScale } = useWindowDimensions()

	const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale])

    return (
        <SafeAreaProvider>
            <App.Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </App.Provider>
        </SafeAreaProvider>
    )
}
