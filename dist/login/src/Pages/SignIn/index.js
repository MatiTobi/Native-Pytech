import { Ionicons } from '@expo/vector-icons';
import { useObservable, useValue } from '@legendapp/state/react';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '../../../../components';
import Footer from '../../../../footer';
import Page from 'native-pytech/page';
import colors from '../../constants';
import { useApp } from "../../../../providers/app";
import supabase from "../../../../supabase";
import { useRouter } from 'expo-router';
import Screen from '../../Screen';
import Form from './Form';
export default memo(({ title = 'Apple', subtitle, iconPage = <Screen.SvgLogoPytech size={40}/> }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    const router = useRouter();
    const store = useObservable({
        fields: {
            name: {
                value: null,
                error: (() => {
                    const value = store.fields.name.value.get();
                    if (value === '')
                        return 'Ingresa tu nombre.';
                    return null;
                }),
            },
            lastName: {
                value: null,
                error: (() => {
                    const value = store.fields.lastName.value.get();
                    if (value === '')
                        return 'Ingresa tus apellidos.';
                    return null;
                }),
            },
            email: {
                value: null,
                error: (() => {
                    const value = store.fields.email.value.get();
                    if (value === null)
                        return null;
                    const message = 'Ingresa una dirección válida para usarla como tu correo electrónico principal.';
                    if (value === '')
                        return message;
                    if (!value.includes('@'))
                        return message;
                    if (!value.includes('.'))
                        return message;
                    return null;
                }),
            },
            newPassword: {
                value: null,
                error: (() => {
                    const value = store.fields.newPassword.value.get();
                    if (value === null)
                        return null;
                    if (value.length < 8)
                        return 'La contraseña debe tener al menos 8 caracteres';
                    return null;
                }),
            },
            confirmPassword: {
                value: null,
                error: (() => {
                    const newPassword = store.fields.newPassword.value.get() || '';
                    const confirmPassword = store.fields.confirmPassword.value.get();
                    if (confirmPassword !== newPassword && confirmPassword !== null)
                        return 'Las contraseñas que ingresaste no coinciden';
                    return null;
                }),
            },
        },
        createAccountEnabled: () => {
            const fields = store.fields.get();
            const hasErrors = Object.values(fields).some(field => typeof field.error === 'string');
            const hasValues = Object.values(fields).every(field => field.value !== null);
            return !hasErrors && hasValues;
        }
    });
    const createAccountEnabled = useValue(() => store.createAccountEnabled.get());
    const _subtitle = subtitle || `Solo necesitas una cuenta de ${title} para acceder a todos los servicios de ${title}.\n¿Ya tienes una cuenta de ${title}?`;
    const onPress = async ({ name, lastName, email, password }) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        console.log('data', data);
        console.log('error', error);
        return !error;
    };
    const onSubmit = () => router.replace('/login/inicio');
    return (<>
            <Page style={{ paddingHorizontal: 40, marginTop: 34, paddingBottom: 200 }}>
                <View style={styles.viewTitle}>

                    {iconPage}

                    <Text style={[styles.title, { color: Theme.text }]} adjustsFontSizeToFit numberOfLines={1} minimumFontScale={0.5}>
                        {`Crear tu cuenta de ${title}`}
                    </Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Text style={[styles.subtitle, { color: Theme.text }]}>{_subtitle}</Text>
                        <Link text='Inicia sesión' onPress={({ router }) => router.replace('/login/inicio')} renderItems={({ pressed }) => <Ionicons name="arrow-forward-outline" size={15} color='hsl(207, 100%, 50%)' style={{ transform: [{ rotate: '315deg' }] }}/>} style={{ fontSize: 17 }}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Form store={store}/>
                </View>
            </Page>

            <Footer backgroundColorPage={Theme.backgroundColorModal2}>
                <Footer.Button text='Crear cuenta' enabled={createAccountEnabled} backgroundColorPage={Theme.backgroundColorModal2} onPress={async () => {
            const fields = store.fields.peek();
            return await onPress({
                name: fields.name.value || '',
                lastName: fields.lastName.value || '',
                email: fields.email.value || '',
                password: fields.newPassword.value || ''
            });
        }} onSubmit={onSubmit}/>
            </Footer>
        </>);
});
const styles = StyleSheet.create({
    viewTitle: {
        gap: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22,
    },
    title: {
        fontSize: 27.5,
        fontWeight: '600',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 24,
    },
    container: {
        flex: 1,
        gap: 32,
        display: 'flex',
    },
});
