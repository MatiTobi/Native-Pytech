import { Router } from 'expo-router'
import supabase, { logIn, getUser } from "libs/supabase"



export const getAbbreviatedName = ({first_name, last_name, mail}: {first_name?: string, last_name?: string, mail: string}) => {
    // Si tiene "firstname" y "lastname", se usa la primera letra de cada uno
    // Si solo tiene firstname, se usa las primeras dos letras de "firstname"
    // Si solo tiene lastname, se usa las primeras dos letras de "lastname"
    // No tiene ninguno, se usa las primeras dos letras de "mail"

    const f = first_name?.[0] ?? ''
    const l = last_name?.[0] ?? ''

    let name = ''
    if (f && l) name = f + l
    else if (f) name = f + (first_name?.[1] ?? f)
    else if (l) name = l + (last_name?.[1] ?? l)
    else name = mail?.slice(0, 2) ?? ''

    return name.toUpperCase()
}


export const handleSubmitLogIn = async ({schema, table, username, router}: {schema: string, table: string, username: string, router: Router}) => {
        
    username = username.trim()
    const mail = username.includes('@') ? username : `${username}@pytech.com`

    const { data, error } = await supabase.schema(schema).from(table).select('first_name,second_name,last_name,color').eq('mail', mail)
    if (error)  return {succeded: false, message: error.message}
    if (data.length === 0) return {succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.'}

    // Success
    router.push({ pathname: '/login/inicio/perfil', params: {...data[0], mail: mail} })
    return {succeded: true, message: ''}
}


export const handleSubmitLogInPerfil = async ({mail, password}: {mail: string, password: string}) => {
        
    password = password.trim()

    const {data, error} = await logIn({email: mail, password})
    if (error) {
        if(error.message === 'Invalid login credentials'){
            return {succeded: false, message: 'La contraseña que ingresaste es incorrecta, vuelve a intentarlo.'}
        }
        return {succeded: false, message: error.message}
    }

    return {succeded: true, message: ''}
}