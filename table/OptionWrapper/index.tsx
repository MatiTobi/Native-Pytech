import React, { memo } from 'react'
import { OptionComponent, OptionWrapperProps } from './types'

import ThemeComponent from '@react-native-pytech/components/Theme'
import { ColorSchemeType } from '@react-native-pytech/constants'

import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from './Components'
import Wrapper from './Wrapper'
export { useBorder } from './Wrapper/Contexts/Borders'
export { useDelete } from './Wrapper/Contexts/Delete/context'



const OptionWrapper = memo(({ ...props }: OptionWrapperProps & {colorScheme?: ColorSchemeType}) => {
    return <ThemeComponent component={Wrapper} {...props} />
}) as OptionComponent;


OptionWrapper.Components = {
    DeleteIcon: DeleteIcon,
    DragIcon: DragIcon,
    Icon: Icon,
    Image: Image,
    Text: Text,
    TextInput: TextInput,
    TextInputCurrency: TextInputCurrency,
    TextView: TextView,
}

export default OptionWrapper
