import { List, ListProps } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';

import Editable from './Editable';



const Component = memo(({
    children,
    modifiers,
    ...listProps
    
}: ListProps) => {

    const _modifiers = [padding({ top: -15 })]

    return (
        <List modifiers={[..._modifiers, ...(modifiers || [])]} {...listProps}>
            {children}
        </List>
    )
}) as React.MemoExoticComponent<React.FC<ListProps>> & {
    Editable: typeof Editable
};

Component.Editable = Editable
export default Component