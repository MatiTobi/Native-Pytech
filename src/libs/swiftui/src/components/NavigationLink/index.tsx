import { Button, HStack, Label } from '@expo/ui/swift-ui';
import { listRowInsets as listRowInsetsModifier } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';

import type Props from './types';
import Trailing from './Trailing';



export default memo(({
    children,
    onPress,
    icon,
    label,
    systemImage,
    listRowInsets=false,
    textTrailing,
    textTrailingProps

}: Props) => {

    const modifiers = useMemo(() => listRowInsets ? [listRowInsetsModifier({top: 20, bottom: 20, leading: 25, trailing: 20})] : [], [listRowInsets])

	return (
        <HStack modifiers={modifiers}>
            <Button onPress={onPress}>
                {children ?? <Label title={label} systemImage={systemImage} icon={icon} />}
            </Button>
            <Trailing text={textTrailing} textProps={textTrailingProps} />
        </HStack>
	);
})
