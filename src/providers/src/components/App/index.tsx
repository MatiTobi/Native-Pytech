import React, { memo, useMemo } from "react"
import { useRouter } from "expo-router";
import { useColorScheme, useWindowDimensions, View, StyleSheet } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { handleFontObserver } from 'constants/handleFontObserver';
handleFontObserver() // esto intercepta todos los timeouts de fuentes

import { createCtx } from "constants/utils"
import LoginSvg from 'assets/images/login_letras.svg';
import LoginSvgDark from 'assets/images/login_letras_dark.svg';
import { useEffectWithoutFirstRender } from 'constants/hooks'

import colors, { ColorSchemeType } from "../../constants"
import type Props from './types'



const [Provider, useApp] = createCtx<{ colorScheme: ColorSchemeType, fontScale: number }>()
export { useApp }


export default memo(({
    children,
    isLoading=true,
    renderItemLoading=({ colorScheme }) => (colorScheme === 'dark' ?
        <LoginSvgDark width={200} height={200}/>
    :
        <LoginSvg width={200} height={200}/>
    ),
    onLoadingRealsed

}: Props) => {

    const colorScheme = useColorScheme() as ColorSchemeType
    const Theme = colors[colorScheme]

	const { fontScale } = useWindowDimensions()
    const router = useRouter()

	const value = useMemo(() => ({ colorScheme: colorScheme, fontScale: fontScale }), [colorScheme, fontScale])

    useEffectWithoutFirstRender(() => {
        if (!isLoading) onLoadingRealsed?.({router})
    }, [isLoading])

    if (isLoading) {
        return (
            <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
                {renderItemLoading({colorScheme})}
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
