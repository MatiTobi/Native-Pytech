import colors, { sizesType } from '../../constants';
import IconProps from '../Icon/types';
export type Props = IconProps & {
    /**
        The text to display in the gradient.
        Must be less than 3 characters.
    */
    text?: string;
    /**
        The color of the gradient.
    */
    color: keyof typeof colors;
    /**
        The size of the gradient.
        @default 'small'
    */
    type: sizesType;
};
export default Props;
