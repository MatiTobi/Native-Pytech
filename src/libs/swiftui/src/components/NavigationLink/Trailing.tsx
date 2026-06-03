import { Spacer, HStack } from '@expo/ui/swift-ui';
import { memo } from 'react';

import Text from '../Text';
import ChevronRight from '../ChevronRight';
import { TrailingProps } from './types';



export default memo(({
    text,
    textProps,
    component

}: TrailingProps) => {

	return (
        <>
            <Spacer />
            {(text || component) ? (
                <HStack spacing={10}>
                    {text && <Text {...textProps} secondary>{text}</Text>}
                    {component}
                    <ChevronRight />
                </HStack>
            ) : (
                <ChevronRight />
            )}
        </>
	)
})
