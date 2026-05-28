import { View, Text, Pressable, StyleSheet } from "react-native";
import { memo } from 'react';
import Gradient from "native-pytech/components/gradient";
import Colors from "native-pytech/constants/colors";
import { useApp } from "native-pytech/providers/app";
export default memo(({ title, subtitle, gradientProps, buttonProps }) => {
    const { colorScheme } = useApp();
    const spacing = gradientProps?.type === 'extraLarge' ? 10 : 20;
    return (<View style={[styles.container, { gap: spacing }]}>
            {gradientProps && (<Gradient {...gradientProps}/>)}

            {(title || subtitle) && (subtitle ? (<View style={styles.containerTitle}>
                        <Title title={title} colorScheme={colorScheme}/>
                        <Text style={[styles.subtitle, { color: Colors[colorScheme].text2 }]}>
                            {subtitle}
                        </Text>
                    </View>) : (<Title title={title} colorScheme={colorScheme}/>))}

            {buttonProps && (<Pressable onPress={buttonProps.onPress} style={styles.pressable}>
                    <Text style={styles.label}>{buttonProps.label}</Text>
                </Pressable>)}
        </View>);
});
const Title = memo(({ title, colorScheme }) => {
    return (<Text style={[styles.title, { color: Colors[colorScheme].text }]}>
            {title}
        </Text>);
});
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    subtitle: {
        fontSize: 30
    },
    pressable: {
        backgroundColor: Colors.especiales.azul,
        padding: 10,
        borderRadius: 10
    },
    label: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'semibold'
    }
});
