import { Observable } from "@legendapp/state";
import { memo } from "react";
import { Platform, StyleSheet, View } from "react-native";

import { useApp } from "libs/providers/App"
import colors from "../../../constants";

import { Store } from "../types";
import Input from "./Input";



export default memo(({ store }: { store: Observable<Store> }) => {

    const { colorScheme } = useApp()
    const Theme = colors.theme[colorScheme]

    return (
        <>
            <View style={styles.view}>
                <Input
                    store={store}
                    fieldName="name"
                    placeholder='Nombre'
                    autoComplete='given-name'
                    autoFocus={Platform.OS === 'web'}
                    buttonSend={false}
                    autoCapitalize='words'
                />
                <Input
                    store={store}
                    fieldName="lastName"
                    placeholder='Apellidos'
                    autoComplete='family-name'
                    autoFocus={Platform.OS === 'web'}
                    buttonSend={false}
                    autoCapitalize='words'
                />
            </View>

            <View style={[styles.hr, { backgroundColor: Theme.borderColor5 }]} />

            <View style={styles.view}>
                <Input
                    store={store}
                    fieldName="email"
                    placeholder='nombre@example.com'
                    autoComplete='email'
                    autoFocus={Platform.OS === 'web'}
                    buttonSend={false}
                />
                <Input
                    store={store}
                    fieldName="newPassword"
                    placeholder='Contraseña'
                    autoComplete='new-password'
                    autoFocus={Platform.OS === 'web'}
                    buttonSend={false}
                    secureTextEntry={true}
                />
                <Input
                    store={store}
                    fieldName="confirmPassword"
                    placeholder='Contraseña'
                    autoComplete='new-password'
                    autoFocus={Platform.OS === 'web'}
                    buttonSend={false}
                    secureTextEntry={true}
                />
            </View>
        </>
    )
})


const styles = StyleSheet.create({
    view: {
        flex: 1,
        gap: 15,
        display: 'flex',
    },
    hr: {
        height: 1,
        opacity: 0.6,
    }
})