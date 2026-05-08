import { Router } from 'expo-router'
import supabase from "@/libs/supabase"
import { PerfilColorType } from '../constants'



export type LoginData = {
    first_name: string,
    gradient_text: string,
    color: PerfilColorType,
    mail: string
}

export const handleSubmitLogIn = async ({username, router}: {username: string, router: Router}) => {

    const identifier = username.trim()

    const data = await supabase.execFunction({
        name: 'login',
        args: { p_identifier: identifier }
    }) as LoginData[] | null
    if (!data || data.length === 0) return {succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.'}
    
    // Success
    router.push({ pathname: '/login/inicio/perfil', params: data[0] })
    return {succeded: true, message: ''}
}


export const handleSubmitLogInPerfil = async ({mail, password}: {mail: string, password: string}) => {
        
    password = password.trim()

    const {data, error} = await supabase.logIn({email: mail, password})
    if (error) {
        if(error.message === 'Invalid login credentials'){
            return {succeded: false, message: 'La contraseña que ingresaste es incorrecta, vuelve a intentarlo.'}
        }
        return {succeded: false, message: error.message}
    }

    return {succeded: true, message: ''}
}