import { useRouter } from 'expo-router'
import { memo, useEffect } from 'react'

import { logIn } from 'libs/supabase'
import Screen from '../../Screen'

import { handleSubmitLogIn } from '../utils'
import Props from './types'
import Link from 'libs/components/Link'



export default memo(({
    title='MiApp',
    subtitle='Inicia sesión con un correo electrónico o nombre de usuario para usar la aplicación.',
    iconPage=<Screen.SvgPytech />,
    textCreateAccount,
    enableCreateAccount=false,

}: Props) => {

    const router = useRouter()

    useEffect(() => {
        (async () => {
            const { error } = await logIn()
            if (!error) console.log('LogIn exitoso')
        })()
    }, [])

    return (
        <Screen
            iconPage={iconPage}
            title={title}
            subtitle={subtitle}
            bottomElements={
                <>
                    <Screen.Input
                        placeholder='Correo o nombre de usuario'
                        keyboardType='email-address'
                        autoComplete='email'
                        handleSubmit={async ({value}) => await handleSubmitLogIn({username: value, router})}
                    />
                    {enableCreateAccount && (
                        <Link
                            text={textCreateAccount || `Crear tu cuenta de ${title}`}
                            onPress={({ router }) => router.push({pathname: '/login/inicio/signIn'})}
                        />
                    )}
                </>
            }
        />
    )
})

