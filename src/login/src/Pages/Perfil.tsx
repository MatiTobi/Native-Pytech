import { useLocalSearchParams, useRouter } from 'expo-router'
import { Platform } from 'react-native'
import { memo } from 'react'

import Screen from '../Screen'
import { getAbbreviatedName, handleSubmitLogInPerfil } from './utils'
import { PerfilColorType } from '../constants'



export default memo(({ routeOnSuccess, onSuccess }: { routeOnSuccess?: string, onSuccess?: () => Promise<void> }) => {
    
    const { mail, firstname, lastname, color } = useLocalSearchParams() as {mail: string, firstname?: string, lastname?: string, color: PerfilColorType}
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
            iconPage={<Screen.Gradient text={getAbbreviatedName({firstname, lastname, mail})} color={color} />}
            title={`¡Hola${firstname ? ` ${firstname}` : ''}!`}
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
