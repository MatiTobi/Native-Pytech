import { Spacer, Image } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import React, { memo } from 'react';
import Text from '../Text';
export default memo(({ secondaryText, secondaryTextProps }) => {
    return (<>
            <Spacer />
            {secondaryText && (<Text {...secondaryTextProps} secondary>{secondaryText}</Text>)}
            <ChevronRight />
        </>);
});
const ChevronRight = memo(() => <Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator}/>);
