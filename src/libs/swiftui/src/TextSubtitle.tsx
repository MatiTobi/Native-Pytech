import { VStack, TextProps } from '@expo/ui/swift-ui';
import React, { memo } from 'react';

import Text from './Text';



type Props = {
    /**
        Title to display in the label.
    */
    title?: string
    /**
        Subtitle to display in the label.
    */
    subtitle?: string
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps
    /**
        Props to apply to the subtitle.
    */
    subtitleTextProps?: TextProps
}


export default memo(({
    title,
    subtitle,
    titleTextProps,
    subtitleTextProps
    
}: Props) => {
    return (
        <VStack alignment='leading' spacing={2}>
            <Text {...titleTextProps}>{title}</Text>
            <Text {...subtitleTextProps} secondary>{subtitle}</Text>
        </VStack>
    )
})