import React, { memo, useMemo } from "react"
import { useColorScheme, useWindowDimensions, View, StyleSheet } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { createCtx } from "constants/utils"
import LoginSvg from 'assets/images/login_letras.svg';
import LoginSvgDark from 'assets/images/login_letras_dark.svg';

import colors, { ColorSchemeType } from "../../constants"
import type Props from './types'



const [Provider, useApp] = createCtx<{ colorScheme: ColorSchemeType, fontScale: number }>()
export { useApp }


export default memo(({
    children,
    isLoading=false,
    renderItemLoading=({ colorScheme }) => (colorScheme === 'dark' ?
        <LoginSvgDark width={200} height={200}/>
    :
        <LoginSvg width={200} height={200}/>
    )

}: Props) => {

    const colorScheme = useColorScheme() as ColorSchemeType
    const Theme = colors[colorScheme]

	const { fontScale } = useWindowDimensions()

	const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale])

    if (isLoading) {
        return (
            <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
                {renderItemLoading({ colorScheme })}
            </View>
        )
    }

    return (
        <SafeAreaProvider>
            <Provider value={value}>
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </SafeAreaProvider>
    )
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
