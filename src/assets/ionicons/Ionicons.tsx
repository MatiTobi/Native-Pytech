import { Ionicons as IoniconsExpo } from '@expo/vector-icons'
import { _icons } from '.'
import React, { ComponentProps } from 'react'
import { OpaqueColorValue, PixelRatio } from 'react-native'
import { G } from 'react-native-svg'



type IoniconsExpoProps = ComponentProps<typeof IoniconsExpo>

export interface IoniconsProps {
    /**
     * Name of the icon to show
     *
     * See Icon Explorer app
     * {@link https://expo.github.io/vector-icons/}
     */

    name: IoniconsExpoProps['name']

    /**
     * Color of the icon. Can be a string or OpaqueColorValue (returned from
     * PlatformColor(..))
     *
     */
    color?: string | OpaqueColorValue

    /**
     * Size of the icon, can also be passed as fontSize in the style object.
     *
     * @default 12
     */
    size?: number

    /**
     * X position of the icon
     */
    x?: number

    /**
     * Y position of the icon
     */
    y?: number
}

export const Ionicons = ({ name, color, size = 12, y = 0, x = 0 } : IoniconsProps) => {
    
    const paths = _icons[name]
    if (!paths) throw new Error(`El icono "${name}" no existe`)

    const scale = size / 512
    if (y) y -= PixelRatio.roundToNearestPixel(size / 2)

    return (
        <G y={y || undefined} x={x || undefined} scale={scale} color={color}>
            {paths}
        </G>
    )
}

export default Ionicons
