import { createClient as createSupabaseClient } from '@supabase/supabase-js';
export * as types from './types';
export const logIn = async (supabase, params) => (await supabase.auth.signInWithPassword(params));
export const logOut = async (supabase) => (await supabase.auth.signOut());
export const getUser = async (supabase) => {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user;
};
export const createClient = ({ url, key, options }) => (createSupabaseClient(url, key, options));
export const execFunction = async (supabase, { schema = 'app', name, args }) => {
    const { data, error } = await supabase.schema(schema).rpc(name, args);
    if (error) {
        console.error(name, error);
        return null;
    }
    return data;
};
export const getUserById = async (supabase, { uid }) => (await supabase.auth.admin.getUserById(uid));
export const updateUser = async (supabase, { uid, attributes }) => (await supabase.auth.admin.updateUserById(uid, attributes));
export const deleteUser = async (supabase, { uid }) => (await supabase.auth.admin.deleteUser(uid));
export const signUp = async (supabase, credentials) => (await supabase.auth.signUp(credentials));
