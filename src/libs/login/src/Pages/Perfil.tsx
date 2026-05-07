import { useLocalSearchParams, useRouter } from 'expo-router'
import { Platform } from 'react-native'
import { memo } from 'react'

import Screen from '../Screen'
import { handleSubmitLogInPerfil, type LoginData } from './utils'



export default memo(({ routeOnSuccess, onSuccess }: { routeOnSuccess?: string, onSuccess?: () => Promise<void> }) => {
    
    const { mail, first_name, gradient_text, color } = useLocalSearchParams<LoginData>()
    console.log('gradient_text', gradient_text)
    const router = useRouter()

    const handleSubmit = async ({value}: {value: string}) => {
        const { succeded, message } = await handleSubmitLogInPerfil({mail, password: value})
        if (succeded){
            await onSuccess?.()
            if (routeOnSuccess) router.replace(routeOnSuccess)
        }
        return { succeded, message }
    }

    return (
        <Screen
            iconPage={<Screen.Gradient text={`${gradient_text}`} color={color} />}
            title={`¡Hola${first_name ? ` ${first_name}` : ''}!`}
            bottomElements={
                <Screen.Input
                    placeholder='Contraseña'
                    keyboardType='default'
                    secureTextEntry={true}
                    autoComplete='password'
                    handleSubmit={handleSubmit}
                    autoFocus={Platform.OS === 'web'}
                />
            }
        />
    )
})
