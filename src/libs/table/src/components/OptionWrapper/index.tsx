import React, { memo } from 'react'
import Props, { OptionComponent } from './types'

import ThemeComponent from 'libs/components/Theme'
import { type ColorSchemeType } from '../../constants'

import * as OptionComponents from '../OptionComponents'
import Wrapper from '../Wrapper'



const OptionWrapper = memo(({ ...props }: Props & {colorScheme?: ColorSchemeType}) => {
    return <ThemeComponent component={Wrapper} {...props} />
}) as OptionComponent;

OptionWrapper.Components = OptionComponents

export default OptionWrapper
