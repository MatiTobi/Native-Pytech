import { Button, RNHostView, VStack, ButtonProps } from '@expo/ui/swift-ui';
import { frame, font, buttonStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo } from 'react';

import Gradient, { Props as GradientProps } from 'libs/components/Gradient';

import Text from '../Text';
import Section from './Section';



type Props = {
    /**
        The title of the icon section.
    */
    title?: string
    /**
        The subtitle of the icon section.
    */
    subtitle?: string
    /**
        If it is given, displays a gradient.
    */
    gradientProps?: {
        text: GradientProps['text']
        color: GradientProps['color']
        type: 'extraLarge' | 'extraExtraLarge'
    }
    /**
        If it is given, displays a button.
    */
    buttonProps?: ButtonProps
}


export default memo(({
    title,
    subtitle,
    gradientProps,
    buttonProps,

}: Props) => {

    const spacing = gradientProps?.type === 'extraLarge' ? 16 : 20

    return (
        <Section spacing={spacing}>
            {gradientProps && (
                <RNHostView matchContents >
                    <Gradient {...gradientProps} />
                </RNHostView>
            )}

            <VStack modifiers={[frame({ alignment: 'center' })]} spacing={2}>
                <Text modifiers={[
                    font({weight: 'bold', size: 30}),
                ]}>
                    {title}
                </Text>
                <Text secondary>{subtitle}</Text>
            </VStack>

            {buttonProps && (
                <Button
                    {...buttonProps}
                    modifiers={[buttonStyle('bordered'), ...(buttonProps?.modifiers || [])]}
                />
            )}
        </Section>
    )
})
