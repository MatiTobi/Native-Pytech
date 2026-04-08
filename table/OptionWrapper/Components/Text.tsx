import React, { memo, useMemo } from 'react'
import { StyleProp, TextProps, TextStyle, StyleSheet } from 'react-native'

import { Colors, ColorSchemeType, ThemeType } from 'react-native-pytech/constants'
import Text$ from 'react-native-pytech/components/Text$'
import ThemeComponent from 'react-native-pytech/components/Theme'




/**
    Pone el color del texto según el tema.
*/

type Props = {
    texto: string
    enabled: boolean
    fontScale?: string
    style: StyleProp<TextStyle>
}

export default memo(({ ...props } : Props & {colorScheme?: ColorSchemeType} & TextProps) => {
    return <ThemeComponent component={Component} {...props} />
})



const Component = memo(({

    texto,
    enabled=true,
    style = {},
    colorScheme,
    fontScale,
    ...props

} : Props & {colorScheme: ColorSchemeType} & TextProps) => {

    const Theme : ThemeType = Colors[colorScheme] // Con el ! estamos diciendo que colorScheme es obligatorio (que será)
    const textStyle = useMemo(() => [styles.text, { color: enabled ? Theme.text : Theme.text2Libretas}, style], [enabled, Theme, style])
	
    return (
		<Text$ fontScale={fontScale} style={textStyle} {...props}>
            {texto}
        </Text$>
	)
})

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
    }
})