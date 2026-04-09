import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { useDelete } from '../..'
import RemoveCircle from '../../../assets/components/remove-circle'
import { Colors } from '../../../constants'



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

