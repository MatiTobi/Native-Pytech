import { _icons } from '.';
import React from 'react';
import { PixelRatio } from 'react-native';
import { G } from 'react-native-svg';
export const Ionicons = ({ name, color, size = 12, y = 0, x = 0 }) => {
    const paths = _icons[name];
    if (!paths)
        throw new Error(`El icono "${name}" no existe`);
    const scale = size / 512;
    if (y)
        y -= PixelRatio.roundToNearestPixel(size / 2);
    return (<G y={y || undefined} x={x || undefined} scale={scale} color={color}>
            {paths}
        </G>);
};
export default Ionicons;
