import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'

import { Colors, ThemeType } from '@react-native-pytech/constants'
import { useApp } from '@react-native-pytech/providers/App'



/**
    Pone el color según el tema.
*/
export default memo(({name, size = 30} : {name: keyof typeof Ionicons.glyphMap, size: number}) => {

    const { colorScheme } = useApp()
    const Theme : ThemeType = Colors[colorScheme]

	return (
        <Ionicons name={name} size={size} color={Theme.flecha}/>
	)
})

