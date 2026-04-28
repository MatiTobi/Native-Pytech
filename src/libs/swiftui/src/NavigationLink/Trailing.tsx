import { Spacer, Image, HStack } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';

import Text from '../Text';
import { TrailingProps } from './types';



export default memo(({
    text,
    textProps

}: TrailingProps) => {

	return (
        <>
            <Spacer />
            {text ? (
                <HStack spacing={5}>
                    <Text {...textProps} secondary>{text}</Text>
                    <ChevronRight />
                </HStack>
            ) : (
                <ChevronRight />
            )}
        </>
	)
})


const ChevronRight = memo(() => <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator} />)