import { LinearGradient } from "expo-linear-gradient"
import { Text, StyleSheet } from "react-native"
import { memo } from "react"

import colors, { PerfilColorType } from '../../constants'



export default memo(({text, color='default'}: {text: string, color: PerfilColorType}) => (
    <LinearGradient
        style={styles.container}
        colors={[colors.perfil[color].light, colors.perfil[color].dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
    >
        <Text style={styles.text}>{text}</Text>
    </LinearGradient>
))


const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        lineHeight: 200,
        fontSize: 90,
        letterSpacing: -2,
        fontWeight: 'bold',
        color: 'white',
    }
})
