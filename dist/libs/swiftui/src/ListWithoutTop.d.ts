import { ListProps } from '@expo/ui/swift-ui';
import React from 'react';
type Props = ListProps & {
    children: React.ReactNode;
};
declare const _default: React.MemoExoticComponent<({ children, modifiers, ...listProps }: Props) => React.JSX.Element>;
export default _default;
