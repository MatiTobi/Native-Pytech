import { Spacer, Image, HStack } from '@expo/ui/swift-ui';
import { foregroundStyle, font } from '@expo/ui/swift-ui/modifiers';
import { Color } from 'expo-router';
import  { memo } from 'react';

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
                <HStack spacing={10}>
                    <Text {...textProps} secondary>{text}</Text>
                    <ChevronRight />
                </HStack>
            ) : (
                <ChevronRight />
            )}
        </>
	)
})


const ChevronRight = memo(() => (
    <Image
        systemName='chevron.right'
        size={16}
        color={Color.ios.opaqueSeparator}
        /*modifiers={[
            foregroundStyle({type: 'hierarchical', style: 'tertiary'}),
            font({weight: 'semibold'})
        ]}*/
    />
))