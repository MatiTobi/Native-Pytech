import { Button, HStack, Label } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { Color } from 'expo-router';
import React, { memo } from 'react';

import type Props from './types';
import Trailing from './Trailing';



export default memo(({
    children,
    systemImage,
    label,
    modifiers,
    maintainButtonStyle = false,
    textTrailing,
    textTrailingProps,
    ...buttonProps

}: Props) => {

    // Va a poner una Label cuando no tenga que mantener el estilo del button y haya una imagen.
    // Si no tiene que mantener el estilo del button y no hay una imagen, solo va a cambiar el foregroundColor.
    const renderLabel = !maintainButtonStyle && systemImage

    const _modifiers = (!maintainButtonStyle && !renderLabel) ? [foregroundStyle(Color.ios.label)] : []

    const buttonSystemImage = !renderLabel ? systemImage : undefined
    const buttonLabel = !renderLabel ? label : undefined

	return (
        <HStack>
            <Button
                modifiers={[..._modifiers, ...(modifiers || [])]}
                systemImage={buttonSystemImage}
                label={buttonLabel}
                {...buttonProps}
            >
                {
                    children || (
                        renderLabel && <Label title={label} systemImage={systemImage}/>
                    )
                }
            </Button>
            <Trailing text={textTrailing} textProps={textTrailingProps} />
        </HStack>
	);
})
