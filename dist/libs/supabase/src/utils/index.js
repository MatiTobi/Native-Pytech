import { createClient as createSupabaseClient } from '@supabase/supabase-js';
export * as types from './types';
export const logIn = async (supabase, params) => (await supabase.auth.signInWithPassword(params));
export const logOut = async (supabase) => (await supabase.auth.signOut());
export const getUser = async (supabase) => {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user;
};
export const createClient = ({ url, key, options }) => (createSupabaseClient(url, key, options));
export const execFunction = async (supabase, { schema = 'app', functionName, args }) => {
    const { data, error } = await supabase.schema(schema).rpc(functionName, args);
    if (error) {
        console.error(functionName, error);
        return null;
    }
    return data;
};
export const getUserById = async (supabase, { uid }) => (await supabase.auth.admin.getUserById(uid));
export const updateUser = async (supabase, { uid, attributes }) => (await supabase.auth.admin.updateUserById(uid, attributes));
export const deleteUser = async (supabase, { uid }) => (await supabase.auth.admin.deleteUser(uid));
export const createUser = async (supabase, { attributes }) => (await supabase.auth.admin.createUser(attributes));
