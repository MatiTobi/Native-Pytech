import { ConfirmationDialog, Button, Text } from '@expo/ui/swift-ui';
import React, { memo, useState, useCallback } from 'react';

import type Props from './types';



export default memo(({
    children,
    buttonTriggerProps,
    title,
    message,

}: Props) => {
    const [isPresented, setIsPresented] = useState(false)

    const onPress = useCallback(() => {
        buttonTriggerProps?.onPress?.()
        setIsPresented(true)
    }, [])

    return (
        <ConfirmationDialog
            title={title ?? ''}
            isPresented={isPresented}
            onIsPresentedChange={setIsPresented}
            titleVisibility={title ? 'visible' : 'hidden'}
        >
            <ConfirmationDialog.Trigger>
                <Button {...buttonTriggerProps} onPress={onPress} />
            </ConfirmationDialog.Trigger>

            <ConfirmationDialog.Actions>
                {children}
            </ConfirmationDialog.Actions>

            {message && <ConfirmationDialog.Message>
                <Text>{message}</Text>
            </ConfirmationDialog.Message>}
        </ConfirmationDialog>
    )
})
