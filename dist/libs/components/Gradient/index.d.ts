import React from 'react';
import colors, { sizes, sizesType } from './constants';
export { sizes };
export type Props = {
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
declare const _default: React.MemoExoticComponent<({ text, color, type }: Props) => React.JSX.Element>;
export default _default;
