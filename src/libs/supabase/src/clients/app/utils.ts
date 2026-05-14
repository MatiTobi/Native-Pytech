import supabase from './config'
import * as utils from '../../utils'
import { expoEnv } from '@/libs/constants/consts'

const { SUPABASE_USERNAME_LOGIN, SUPABASE_PASSWORD_LOGIN } = expoEnv



export const logIn = async ({
    email = SUPABASE_USERNAME_LOGIN,
    password = SUPABASE_PASSWORD_LOGIN
}: {
    email?: string,
    password?: string
} = {}) => (
    await utils.logIn(supabase, { email, password })
)


export const logOut = async () => await utils.logOut(supabase)


export const getUser = async () => await utils.getUser(supabase)


export const execFunction = async (params: utils.types.ExecFunctionParams) => (
    await utils.execFunction(supabase, params)
)


export const signUp = async (params: utils.types.SignUpParams) => (
    await utils.signUp(supabase, params)
)