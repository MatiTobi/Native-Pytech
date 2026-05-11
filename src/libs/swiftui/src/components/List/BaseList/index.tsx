import { List } from '@expo/ui/swift-ui';
import { padding, refreshable } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';

import type Props from './types';



/**
    Wrapper de List que aplica un padding superior negativo por defecto.

    Este componente extiende "List" de @expo/ui/swift-ui y agrega automáticamente:
    - padding({ top: -15 })
*/
export default memo(({
    children,
    modifiers,
    disablePaddingTop,
    onRefresh,
    ...listProps
    
}: Props) => {

    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),

        ...(disablePaddingTop ? [padding({ top: -15 })] : []),
        ...(onRefresh ? [refreshable(onRefresh)] : []),
    ], [modifiers, disablePaddingTop, onRefresh])

    return (
        <List modifiers={_modifiers} {...listProps}>
            {children}
        </List>
    )
})
