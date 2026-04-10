import React from 'react';
import colors, { sizes, sizesType } from './constants';
export { sizes };
declare const _default: React.MemoExoticComponent<({ text, color, type }: {
    text: string;
    color: keyof typeof colors;
    type: sizesType;
}) => React.JSX.Element>;
export default _default;
