import React, { useMemo } from "react"
import { useColorScheme, useWindowDimensions } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { ColorSchemeType } from "constants/colors"
import { createCtx } from "constants/utils"



const [Provider, useApp] = createCtx<{ colorScheme: ColorSchemeType, fontScale: number }>()
export { useApp }


export default ({ children }: { children: React.ReactNode }) => {

    const colorScheme = useColorScheme() as ColorSchemeType
	const { fontScale } = useWindowDimensions()

	const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale])

    return (
        <SafeAreaProvider>
            <Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </SafeAreaProvider>
    )
}
