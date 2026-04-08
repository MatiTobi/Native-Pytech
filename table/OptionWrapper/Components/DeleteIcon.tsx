import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { useDelete } from 'react-native-pytech/table'
import RemoveCircle from 'react-native-pytech/assets/components/remove-circle'
import { Colors } from 'react-native-pytech/constants'



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

