import { Section, VStack, VStackProps } from '@expo/ui/swift-ui';
import { containerRelativeFrame, listRowBackground, frame, listRowInsets } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';



type Props = VStackProps & {
    children: React.ReactNode
}

export default memo(({
    children,
    modifiers,
    ...vStackProps
    
}: Props) => {

    const _modifiers = [
        frame({ alignment: 'center' }),
        containerRelativeFrame({ axes: 'horizontal' }),
        listRowBackground('transparent'),
        listRowInsets({ bottom: 0.1 })
    ]

    return (
        <Section>
            <VStack
                spacing={20}
                modifiers={[...(modifiers || []), ..._modifiers]}
                {...vStackProps}
            >
                {children}
            </VStack>
        </Section>
    )
})
