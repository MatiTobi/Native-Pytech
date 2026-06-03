import { Spacer, HStack } from '@expo/ui/swift-ui';
import { memo } from 'react';

import Text from '../Text';
import ChevronRight from '../ChevronRight';
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
