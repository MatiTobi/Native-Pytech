import React, { memo } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Props from '../PageWrapper/types';



export default memo(({ children, style }: Props) => {

    const { bottom, top } = useSafeAreaInsets()
    
    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={'height'}
            keyboardVerticalOffset={bottom + top}
        >
            <ScrollView contentContainerStyle={[{flexGrow: 1}, style]}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
})

