import React from 'react';
import type Props from './types';
/**
    Wrapper de List que aplica un padding superior negativo por defecto.

    Este componente extiende "List" de @expo/ui/swift-ui y agrega automáticamente:
    - padding({ top: -15 })
*/
declare const _default: React.MemoExoticComponent<({ children, modifiers, disablePaddingTop, onRefresh, ...listProps }: Props) => React.JSX.Element>;
export default _default;
