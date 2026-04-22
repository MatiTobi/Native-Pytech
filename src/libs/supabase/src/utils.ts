import { User } from '@supabase/supabase-js'
import supabase from './config'
import { expoEnv } from 'libs/constants/consts'

const { SUPABASE_USERNAME_LOGIN, SUPABASE_PASSWORD_LOGIN } = expoEnv


export const logIn = async ({
    email = SUPABASE_USERNAME_LOGIN,
    password = SUPABASE_PASSWORD_LOGIN
}: { email?: string, password?: string } = {}) => {
    console.log('logIn with', email, password)
    return await supabase.auth.signInWithPassword({
        email,
        password
    })
}

export const logOut = async () => await supabase.auth.signOut()


export const getUser = async (): Promise<User | undefined> => {
    try {
        const { data } = await supabase.auth.getSession()
        return data?.session?.user
    } catch (e) {console.warn('Error verificando sesión:', e)}
}