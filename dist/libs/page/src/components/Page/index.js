import React, { memo } from 'react';
import { Platform, ScrollView } from 'react-native';
export default memo(({ children, style }) => {
    return (<ScrollView style={{ flex: 1 }} automaticallyAdjustKeyboardInsets={true} contentContainerStyle={style} showsVerticalScrollIndicator={Platform.OS === 'web' ? false : undefined}>
            {children}
        </ScrollView>);
});
