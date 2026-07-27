import supabase from './config'
import * as utils from '../../utils'



export const logIn = async ({ email, password }: { email: string, password: string }) => (
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


export const updateMyUser = async (params: utils.types.UpdateMyUserParams) => (
    await utils.updateMyUser(supabase, params)
)