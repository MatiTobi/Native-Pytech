import { Ionicons as IoniconsExpo } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { OpaqueColorValue } from 'react-native';
type IoniconsExpoProps = ComponentProps<typeof IoniconsExpo>;
export interface IoniconsProps {
    /**
     * Name of the icon to show
     *
     * See Icon Explorer app
     * {@link https://expo.github.io/vector-icons/}
     */
    name: IoniconsExpoProps['name'];
    /**
     * Color of the icon. Can be a string or OpaqueColorValue (returned from
     * PlatformColor(..))
     *
     */
    color?: string | OpaqueColorValue;
    /**
     * Size of the icon, can also be passed as fontSize in the style object.
     *
     * @default 12
     */
    size?: number;
    /**
     * X position of the icon
     */
    x?: number;
    /**
     * Y position of the icon
     */
    y?: number;
}
export declare const Ionicons: ({ name, color, size, y, x }: IoniconsProps) => React.JSX.Element;
export default Ionicons;
