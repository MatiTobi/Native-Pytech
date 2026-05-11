import { Button, HStack, Label } from '@expo/ui/swift-ui';
import { foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { Color } from 'expo-router';
import React, { memo, useMemo } from 'react';
import Trailing from './Trailing';
export default memo(({ children, systemImage, label, modifiers, maintainButtonStyle = false, textTrailing, textTrailingProps, ...buttonProps }) => {
    // Va a poner una Label cuando no tenga que mantener el estilo del button y haya una imagen.
    // Si no tiene que mantener el estilo del button y no hay una imagen, solo va a cambiar el foregroundColor.
    const renderLabel = !maintainButtonStyle && systemImage !== undefined;
    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
        ...(!maintainButtonStyle && !renderLabel ? [foregroundStyle(Color.ios.label)] : []),
    ], [modifiers, maintainButtonStyle, renderLabel]);
    const buttonSystemImage = !renderLabel ? systemImage : undefined;
    const buttonLabel = !renderLabel ? label : undefined;
    return (<HStack>
            <Button modifiers={_modifiers} systemImage={buttonSystemImage} label={buttonLabel} {...buttonProps}>
                {children}
            </Button>
            {!children && renderLabel && (<Label title={label} systemImage={systemImage}/>)}
            <Trailing text={textTrailing} textProps={textTrailingProps}/>
        </HStack>);
});
