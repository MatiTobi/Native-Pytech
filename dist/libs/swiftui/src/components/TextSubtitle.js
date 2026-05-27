import { VStack } from '@expo/ui/swift-ui';
import React, { memo } from 'react';
import Text from './Text';
export default memo(({ title, subtitle, titleTextProps, subtitleTextProps }) => {
    return (<VStack alignment='leading' spacing={2}>
            <Text {...titleTextProps}>{title}</Text>
            <Text {...subtitleTextProps} secondary>{subtitle}</Text>
        </VStack>);
});
