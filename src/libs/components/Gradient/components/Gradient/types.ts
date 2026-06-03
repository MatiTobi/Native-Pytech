import { sizesType, ColorsType } from '../../constants'
import IconProps from '../Icon'



export type BaseProps = Pick<IconProps, 'size'> & {
    /**
        The text to display in the gradient.
        Must be less than 3 characters.
    */
    text?: string

    /**
        The color of the gradient.
        @default 'default'
    */
    color?: ColorsType

    /**
        The size of the gradient.
        @default 'small'
    */
    type?: sizesType

    /**
        The size of the gradient. If "type" is provided, this will be ignored.
    */
    sizeDiameter?: number
}


export type Props = BaseProps & Omit<IconProps, 'size'> & {
    /**
        Function to render the item.
        @platform android
    */
    renderGradientAndroid?: (props: BaseProps) => React.ReactNode

    /**
        Function to render the item.
        @platform ios
    */
    renderGradientIOS?: (props: renderGradientIOSProps) => React.ReactNode
}

export type renderGradientIOSProps = BaseProps & Pick<IconProps, 'systemName'>


export default Props