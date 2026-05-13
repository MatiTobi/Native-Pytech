import { View, StyleSheet } from 'react-native'
import React, { memo } from 'react'


export default memo(({children}: {children: React.ReactNode}) => (
    <View style={styles.view}>
        {children}
    </View>
))


const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 17 * 2,
        gap: 10,
    }
})

