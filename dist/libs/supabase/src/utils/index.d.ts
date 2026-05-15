import { SupabaseClient } from '@supabase/supabase-js';
import type { CreateClientParams, SignUpParams, ExecFunctionParams, LogInParams, UpdateUserParams, NewUserParams, UpdateMyUserParams } from './types';
export * as types from './types';
export declare const logIn: (supabase: SupabaseClient, params: LogInParams) => Promise<import("@supabase/auth-js").AuthTokenResponsePassword>;
export declare const logOut: (supabase: SupabaseClient) => Promise<{
    error: import("@supabase/auth-js").AuthError | null;
}>;
export declare const getUser: (supabase: SupabaseClient) => Promise<import("@supabase/auth-js").User>;
export declare const createClient: ({ url, key, options }: CreateClientParams) => SupabaseClient<any, "public", "public", any, any>;
export declare const execFunction: (supabase: SupabaseClient, { schema, name, args }: ExecFunctionParams) => Promise<any | null>;
export declare const updateMyUser: (supabase: SupabaseClient, attributes: UpdateMyUserParams) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const getUserById: (supabase: SupabaseClient, { uid }: {
    uid: string;
}) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const updateUser: (supabase: SupabaseClient, { uid, attributes }: UpdateUserParams) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const deleteUser: (supabase: SupabaseClient, { uid }: {
    uid: string;
}) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const signUp: (supabase: SupabaseClient, credentials: SignUpParams) => Promise<import("@supabase/auth-js").AuthResponse>;
export declare const newUser: (supabase: SupabaseClient, attributes: NewUserParams) => Promise<import("@supabase/auth-js").UserResponse>;
