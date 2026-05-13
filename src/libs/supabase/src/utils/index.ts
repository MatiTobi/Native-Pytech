import { SupabaseClient } from '@supabase/supabase-js'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

import type { CreateClientParams, SignUpParams, ExecFunctionParams, LogInParams, UpdateUserParams } from './types'
export * as types from './types'



export const logIn = async (supabase: SupabaseClient, params: LogInParams) => (
    await supabase.auth.signInWithPassword(params)
)


export const logOut = async (supabase: SupabaseClient) => (
    await supabase.auth.signOut()
)


export const getUser = async (supabase: SupabaseClient) => {
    const { data } = await supabase.auth.getSession()
    return data?.session?.user
}


export const createClient = ({ url, key, options }: CreateClientParams) => (
    createSupabaseClient(url, key, options)
)


export const execFunction = async (
    supabase: SupabaseClient,
    {
        schema='app',
        name,
        args
    }: ExecFunctionParams
): Promise<any | null> => {

	const { data, error } = await supabase.schema(schema).rpc(name, args)
    if (error){
        console.error(name, error)
        return null
    }
	return data
}


export const getUserById = async (supabase: SupabaseClient, {uid}: {uid: string}) => (
    await supabase.auth.admin.getUserById(uid)
)


export const updateUser = async (supabase: SupabaseClient, {uid, attributes}: UpdateUserParams) => (
    await supabase.auth.admin.updateUserById(uid, attributes)
)


export const deleteUser = async (supabase: SupabaseClient, {uid}: {uid: string}) => (
    await supabase.auth.admin.deleteUser(uid)
)


export const signUp = async (supabase: SupabaseClient, credentials: SignUpParams) => (
    await supabase.auth.signUp(credentials)
)