import colors, { sizesType } from '../../constants'
import IconProps from '../Icon/types'


export type Props = Omit<IconProps, 'size'> & {
    /**
        The text to display in the gradient.
        Must be less than 3 characters.
    */
    text?: string
    /**
        The color of the gradient.
    */
    color: keyof typeof colors
    /**
        The size of the gradient.
        @default 'small'
    */
    type: sizesType
    /**
        The size of the icon.
        @ios
        @default (typeSizes.diameter/2)
    */
    iconSize?: number
}

export default Props