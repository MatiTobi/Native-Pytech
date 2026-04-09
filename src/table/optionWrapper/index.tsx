import React, { memo } from 'react'
import { OptionComponent, OptionWrapperProps } from './types'

import ThemeComponent from '../../components/theme'
import { type ColorSchemeType } from '../../constants/colors'

import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from './components'
import Wrapper from './wrapper'
export { useBorder } from './wrapper/contexts/borders'
export { useDelete } from './wrapper/contexts/delete/context'



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
