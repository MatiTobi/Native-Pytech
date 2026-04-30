import { ListProps } from '@expo/ui/swift-ui';
import React from 'react';
import Editable from './Editable';
/**
    Wrapper de List que aplica un padding superior negativo por defecto.

    Este componente extiende "List" de @expo/ui/swift-ui y agrega automáticamente:
    - padding({ top: -15 })

    También expone "List.Editable" para usar una versión editable de la lista.
    Para ponerle el padding superior negativo, se puede usar el prop "withoutTopPadding" = true en "List.Editable".
*/
declare const Component: React.MemoExoticComponent<React.FC<ListProps>> & {
    Editable: typeof Editable;
};
export default Component;
