import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { Pressable, PressableProps } from 'react-native'

//import { useDrag } from 'reactNative/Libs/ReorderableList'
import Colors, { ThemeType } from 'reactNative/colors'
import { useApp } from 'reactNative/Providers/App';


/**
    Icono de drag.
*/
export default memo(() => {

	const { colorScheme } = useApp()
    const Theme : ThemeType = Colors[colorScheme]

    //const pressableProps = useDrag() as unknown as PressableProps
	const pressableProps = {} as PressableProps

	return (
        <Pressable {...pressableProps}>
			<Ionicons name='menu-outline' size={28} color={Theme.borderColorContCliente}/>
		</Pressable>
	)
})

