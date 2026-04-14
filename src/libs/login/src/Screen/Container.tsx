import { useApp } from "libs/providers/App"
import { memo } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native'
import colors from '../constants'



export default memo(({children}: {children: React.ReactNode}) => {

    const { height } = useWindowDimensions()
    const { colorScheme } = useApp()
    const Theme = colors.theme[colorScheme]

    return (
        <TouchableWithoutFeedback>
            <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
                <ScrollView 
                    contentContainerStyle={{minHeight: height, flexGrow: 1}}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.pagina, {backgroundColor: Theme.backgroundColor}]}>
                        {children}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
})


const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    }
})
