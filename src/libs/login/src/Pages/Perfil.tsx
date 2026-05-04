import { useLocalSearchParams, useRouter } from 'expo-router'
import { Platform } from 'react-native'
import { memo } from 'react'

import Screen from '../Screen'
import { getAbbreviatedName, handleSubmitLogInPerfil } from './utils'
import { PerfilColorType } from '../constants'



export default memo(({ routeOnSuccess, onSuccess }: { routeOnSuccess?: string, onSuccess?: () => Promise<void> }) => {
    
    const { user_id, mail, first_name, second_name, last_name, color } = useLocalSearchParams() as {user_id: string, mail: string, first_name?: string, second_name?: string, last_name?: string, color: PerfilColorType}
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
            iconPage={<Screen.Gradient text={getAbbreviatedName({first_name, last_name, mail})} color={color} />}
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
