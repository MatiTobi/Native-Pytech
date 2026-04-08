import React, { memo } from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import Colors, { ThemeType } from 'reactNative/colors'
import { useApp } from 'reactNative/Providers/App'


/**
    Pone el tintColor según el tema.
*/
export default memo(({source} : {source: ImageSourcePropType}) => {

    const { colorScheme } = useApp()
    const Theme : ThemeType = Colors[colorScheme]

	return (
        <Image source={source} style={{ width: 12.1, height: 12.1 }} tintColor={Theme.flecha}/>
	)
})

