import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { useDelete } from '../../context/delete'
import RemoveCircle from 'libs/assets/components/RemoveCircle'
import colors from '../../constants'



/**
    Icono de eliminar.
*/
export default memo(() => {

    const startDelete = useDelete()

	return (
        <Pressable onPress={() => startDelete()}>
			<RemoveCircle size={30} color={colors.especiales.rojo} insideColor='white' />
		</Pressable>
	)
})

