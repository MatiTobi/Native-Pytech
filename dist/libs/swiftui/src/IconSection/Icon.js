import { Button, RNHostView, VStack } from '@expo/ui/swift-ui';
import { frame, font, buttonStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';
import Gradient from '../../../../libs/components/Gradient';
import Text from '../Text';
import Section from './Section';
export default memo(({ title, subtitle, gradientProps, buttonProps, }) => {
    const spacing = gradientProps?.type === 'extraLarge' ? 16 : 20;
    return (<Section spacing={spacing}>
            {gradientProps && (<RNHostView matchContents>
                    <Gradient {...gradientProps}/>
                </RNHostView>)}

            <VStack modifiers={[frame({ alignment: 'center' })]} spacing={2}>
                <Text modifiers={[
            font({ weight: 'bold', size: 30 }),
        ]}>
                    {title}
                </Text>
                <Text secondary>{subtitle}</Text>
            </VStack>

            {buttonProps && (<Button {...buttonProps} modifiers={[buttonStyle('bordered'), ...(buttonProps?.modifiers || [])]}/>)}
        </Section>);
});
