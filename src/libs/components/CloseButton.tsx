import React, { memo } from 'react'
import { useLocalSearchParams, Router, UnknownOutputParams, useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { useApp } from 'libs/providers/app'
import Colors from 'libs/constants/colors'



export default memo(({ onclick }: { onclick: ({router, localSearchParams}: {router: Router, localSearchParams: UnknownOutputParams}) => void }) => {

    const { colorScheme } = useApp()
    const router = useRouter()
    const localSearchParams = useLocalSearchParams()

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => onclick({router, localSearchParams})}
        >
            <Ionicons name="close-outline" size={30} color={Colors[colorScheme].text} />
        </TouchableOpacity>
    )
})


const styles = StyleSheet.create({
    container: {
        marginLeft: 3
    }
})