import React, { memo } from 'react';
import { ScrollView } from 'react-native';
export default memo(({ children, style }) => {
    return (<ScrollView style={{ flex: 1 }} automaticallyAdjustKeyboardInsets={true} contentContainerStyle={style} showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>);
});
