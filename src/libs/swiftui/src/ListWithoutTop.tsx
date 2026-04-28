import { List, ListProps } from '@expo/ui/swift-ui';
import { padding } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';



type Props = ListProps & {
    children: React.ReactNode
}

export default memo(({
    children,
    modifiers,
    ...listProps
    
}: Props) => {

    const _modifiers = [padding({ top: -15 })]

    return (
        <List modifiers={[..._modifiers, ...(modifiers || [])]} {...listProps}>
            {children}
        </List>
    )
})
