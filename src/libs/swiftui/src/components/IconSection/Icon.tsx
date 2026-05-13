import { Button, RNHostView, VStack, ButtonProps } from '@expo/ui/swift-ui';
import { frame, font, buttonStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';

import Gradient, { Props as GradientProps } from '@/libs/components/Gradient';

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
    gradientProps?: Omit<GradientProps, 'type'> & {
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

    const spacing = gradientProps?.type === 'extraLarge' ? 10 : 20

    return (
        <Section spacing={spacing}>
            {gradientProps && (
                <RNHostView matchContents >
                    <Gradient {...gradientProps} />
                </RNHostView>
            )}

            {(title || subtitle) && (
                subtitle ? (
                    <VStack modifiers={[frame({ alignment: 'center' })]} spacing={2}>
                        <Title title={title} />
                        <Text secondary>
                            {subtitle}
                        </Text>
                    </VStack>
                ) : (
                    <Title title={title} />
                )
            )}

            {buttonProps && (
                <Button
                    {...buttonProps}
                    modifiers={[buttonStyle('bordered'), ...(buttonProps?.modifiers || [])]}
                />
            )}
        </Section>
    )
})


const Title = memo(({ title }: { title?: string }) => {
    return (
        <Text modifiers={[font({weight: 'bold', size: 30})]}>
            {title}
        </Text>
    )
})