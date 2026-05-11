import { List, ListProps } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
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
    disablePaddingTop=false,
    ...listProps
    
}: Props) => {

    const _modifiers = useMemo(() => disablePaddingTop ? [] : [padding({ top: -15 })], [disablePaddingTop])

    return (
        <List modifiers={[...(modifiers || []), ..._modifiers]} {...listProps}>
            {children}
        </List>
    )
})
