import { SupabaseClient } from '@supabase/supabase-js'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

import type { CreateClientParams, CreateUserParams, ExecFunctionParams, LogInParams, UpdateUserParams } from './types'
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
        functionName,
        args
    }: ExecFunctionParams
): Promise<any | null> => {

	const { data, error } = await supabase.schema(schema).rpc(functionName, args)
    if (error){
        console.error(functionName, error)
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


export const createUser = async (supabase: SupabaseClient, {attributes}: CreateUserParams) => (
    await supabase.auth.admin.createUser(attributes)
)