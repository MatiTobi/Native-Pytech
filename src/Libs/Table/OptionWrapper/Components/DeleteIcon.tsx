import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { useDelete } from 'react-native-pytech/Libs/Table'
import RemoveCircle from 'react-native-pytech/Assets/components/remove-circle'
import Colors from 'react-native-pytech/colors'



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

