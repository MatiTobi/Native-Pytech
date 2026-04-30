import { List } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
import Editable from './Editable';
/**
    Wrapper de List que aplica un padding superior negativo por defecto.

    Este componente extiende "List" de @expo/ui/swift-ui y agrega automáticamente:
    - padding({ top: -15 })

    También expone "List.Editable" para usar una versión editable de la lista.
    Para ponerle el padding superior negativo, se puede usar el prop "withoutTopPadding" = true en "List.Editable".
*/
const Component = memo(({ children, modifiers, ...listProps }) => {
    const _modifiers = useMemo(() => [padding({ top: -15 })], []);
    return (<List modifiers={[..._modifiers, ...(modifiers || [])]} {...listProps}>
            {children}
        </List>);
});
Component.Editable = Editable;
export default Component;
