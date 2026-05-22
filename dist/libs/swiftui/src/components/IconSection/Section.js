import { Section, VStack } from '@expo/ui/swift-ui';
import { containerRelativeFrame, listRowBackground, frame, listRowInsets } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
export default memo(({ children, modifiers, ...vStackProps }) => {
    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
        frame({ alignment: 'center' }),
        containerRelativeFrame({ axes: 'horizontal' }),
        listRowBackground('transparent'),
        listRowInsets({ bottom: 0.1 })
    ], [modifiers]);
    return (<Section>
            <VStack spacing={20} modifiers={_modifiers} {...vStackProps}>
                {children}
            </VStack>
        </Section>);
});
