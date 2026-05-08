import React, { memo } from 'react'
import TextInputOption from './textInput'
import { TextInputProps } from 'react-native'
import Formats from '@/libs/constants/formats'



/**
	Se utiliza específicamente para formatear el valor del input a pesos.
	Utiliza el componente de TextInputOption.
*/
export default memo(({...props} : TextInputProps) => {

	return (
        <TextInputOption
            keyboardType='numeric'
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={'$0'}

            mask={(value) => value ? Formats.numberToTextCurrency(value) : Formats.numberToTextCurrency(0)}

            {...props}
        />
	)
})

