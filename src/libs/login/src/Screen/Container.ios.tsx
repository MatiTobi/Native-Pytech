import { useApp } from "libs/providers/app"
import { memo } from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../constants'



export default memo(({children}: {children: React.ReactNode}) => {

    const { colorScheme } = useApp()
    const Theme = colors.theme[colorScheme]

    return (
        <TouchableWithoutFeedback>
            <ScrollView
                contentContainerStyle={[styles.pagina, {backgroundColor: Theme.backgroundColor}]}
                automaticallyAdjustKeyboardInsets={true}
            >
                {children}
            </ScrollView>
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
