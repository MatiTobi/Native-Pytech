import { useLocalSearchParams, useRouter } from 'expo-router';
import { Platform } from 'react-native';
import { memo } from 'react';
import Screen from '../Screen';
import { getAbbreviatedName, handleSubmitLogInPerfil } from './utils';
export default memo(({ routeOnSuccess, onSuccess }) => {
    const { mail, firstname, secondname, lastname, color } = useLocalSearchParams();
    const router = useRouter();
    const handleSubmit = async ({ value }) => {
        const { succeded, message } = await handleSubmitLogInPerfil({ mail, password: value });
        if (succeded) {
            await onSuccess?.();
            if (routeOnSuccess)
                router.replace(routeOnSuccess);
        }
        return { succeded, message };
    };
    return (<Screen iconPage={<Screen.Gradient text={getAbbreviatedName({ firstname, lastname, mail })} color={color}/>} title={`¡Hola${firstname ? ` ${firstname}` : ''}!`} bottomElements={<Screen.Input placeholder='Contraseña' keyboardType='default' secureTextEntry={true} autoComplete='password' handleSubmit={handleSubmit} autoFocus={Platform.OS === 'web'}/>}/>);
});
