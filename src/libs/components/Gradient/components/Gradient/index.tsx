import React, { memo, useMemo } from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import colors, { sizes, letterCountType } from '../../constants'
import type Props from './types'
import Icon from '../Icon'



export default memo(({
    text,
    color='default',
    type='small',
    sizeDiameter,
    systemName,
    iconSize,

} : Props) => {
    
    const typeSizes = useMemo(() => sizes[type], [type])

    const textComponent = useMemo(() => {

        const cantLetras = text?.length
        if (!text || !cantLetras) return null
        if (cantLetras > 3) throw new Error('Text must be less than 3 characters')

        return (
            <Text style={[styles.text, { fontSize: typeSizes.fontSize[cantLetras as letterCountType] }]} allowFontScaling={false}>
                {text}
            </Text>
        )
    } , [text, typeSizes])

    return (
        <LinearGradient
            style={[styles.gradient, { height: typeSizes.diameter, borderRadius: typeSizes.diameter }]}
            colors={[colors[color].light, colors[color].dark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            {textComponent ?? (systemName && (
                <Icon systemName={systemName} size={iconSize ?? typeSizes.diameter/2} />
            ))}
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