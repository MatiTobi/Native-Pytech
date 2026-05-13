import { Ionicons } from '@expo/vector-icons'
import React, { memo } from 'react'
import { Pressable, PressableProps } from 'react-native'

//import { useDrag } from '@/libs/ReorderableList'
import colors from '../../constants'
import { useApp } from '@/libs/providers/App';


/**
    Icono de drag.
*/
export default memo(() => {

	const { colorScheme } = useApp()
    const Theme = colors.theme[colorScheme]

    //const pressableProps = useDrag() as unknown as PressableProps
	const pressableProps = {} as PressableProps

	return (
        <Pressable {...pressableProps}>
			<Ionicons name='menu-outline' size={28} color={Theme.borderColorContCliente}/>
		</Pressable>
	)
})

