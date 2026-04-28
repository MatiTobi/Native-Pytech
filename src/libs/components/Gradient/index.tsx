import React, { memo, useMemo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import colors, { sizes, letterCountType, sizesType } from './constants'
export { sizes }


export type Props = {
    /**
        The text to display in the gradient.
        Must be less than 3 characters.
    */
    text: string
    /**
        The color of the gradient.
    */
    color: keyof typeof colors
    /**
        The size of the gradient.
        @default 'small'
    */
    type: sizesType
}


export default memo(({
    text,
    color,
    type = 'small'

} : Props) => {

    const cantLetras = text.length as letterCountType
    if (!cantLetras) throw new Error('Text must be at least 1 character')
    if (cantLetras > 3) throw new Error('Text must be less than 3 characters')
    
    const typeSizes = useMemo(() => sizes[type], [type])
    const textComponent = useMemo(() =>
        <Text style={[styles.text, { fontSize: typeSizes.fontSize[cantLetras] }]} allowFontScaling={false}>
            {text}
        </Text>
    , [text, cantLetras, typeSizes])

    return (
        <LinearGradient
            style={[styles.gradient, { height: typeSizes.diameter, borderRadius: typeSizes.diameter }]}
            colors={[colors[color].light, colors[color].dark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            {textComponent}
        </LinearGradient>
    )
})



const styles = StyleSheet.create({
	gradient: {
		aspectRatio: 1, // width will automatically match height
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
        fontWeight: 'bold',
        letterSpacing: -0.5,
	}
})