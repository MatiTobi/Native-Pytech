import React, { memo } from 'react'
import { Overlay, VStack } from '@expo/ui/swift-ui';



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
            <VStack spacing={10}>
                {children}
            </VStack>
        </Overlay.Content>
    )
})