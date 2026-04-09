import React, { memo, useMemo } from 'react'
import { StyleProp, TextProps, TextStyle, StyleSheet } from 'react-native'

import colors, { type ColorSchemeType } from '../../constants'
import Text$ from '../../../../components/text'
import ThemeComponent from '../../../../components/theme'



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

    const Theme = colors.theme[colorScheme]
    const textStyle = useMemo(() => [styles.text, { color: enabled ? Theme.text : Theme.text2}, style], [enabled, Theme, style])
	
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