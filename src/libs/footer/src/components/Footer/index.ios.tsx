import React, { memo } from 'react'
import { Overlay } from '@expo/ui/swift-ui';



type Props = {
    children: React.ReactNode,
    backgroundColorPage?: string
}

export default memo(({
    children,
    backgroundColorPage

}: Props) => {
    return (
        <Overlay.Content>
            {children}
        </Overlay.Content>
    )
})