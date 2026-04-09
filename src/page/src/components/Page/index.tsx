import React, { memo } from 'react';
import { Platform, ScrollView } from 'react-native';

import Props from '../PageWrapper/types';



export default memo(({ children, style }: Props) => {
    return (
        <ScrollView
            style={{ flex: 1}}
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={style}
            showsVerticalScrollIndicator={Platform.OS === 'web' ? false : undefined}
        >
            {children}
        </ScrollView>
    )
})