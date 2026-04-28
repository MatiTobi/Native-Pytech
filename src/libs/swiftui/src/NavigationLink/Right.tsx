import { Spacer, Image, HStack } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';

import Text from '../Text';
import { RightProps } from './types';



export default memo(({
    secondaryText,
    secondaryTextProps

}: RightProps) => {

	return (
        <>
            <Spacer />
            {secondaryText ? (
                <HStack spacing={2}>
                    <Text {...secondaryTextProps} secondary>{secondaryText}</Text>
                    <ChevronRight />
                </HStack>
            ) : (
                <ChevronRight />
            )}
        </>
	)
})


const ChevronRight = memo(() => <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator} />)