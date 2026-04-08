import { useDelete } from 'reactNative/Libs/Table'
import React, { memo } from 'react'
import { Pressable } from 'react-native'

import RemoveCircle from 'reactNative/Assets/components/remove-circle'
import Colors from 'reactNative/colors'



/**
    Icono de eliminar.
*/
export default memo(() => {

    const startDelete = useDelete()

	return (
        <Pressable onPress={() => startDelete()}>
			<RemoveCircle size={30} color={Colors.especiales.rojo as string} insideColor='white' />
		</Pressable>
	)
})

