import React, { memo, useMemo } from 'react'
import { frame, font, foregroundStyle, background, clipShape } from '@expo/ui/swift-ui/modifiers'
import { Text, Image } from '@expo/ui/swift-ui'

import colors, { sizes, letterCountType } from '../../constants'
import type Props from './types'



export default memo(({
    text,
    color='default',
    type='small',
    systemName,
    sizeDiameter,
    size,
    renderGradientIOS,

} : Props) => {

    if (!renderGradientIOS) return null

    return React.createElement(
        renderGradientIOS, { text, color, type, sizeDiameter, size, systemName }
    )
})