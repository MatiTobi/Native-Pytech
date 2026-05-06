import { AdminUserAttributes, SignUpWithPasswordCredentials, SupabaseClientOptions } from '@supabase/supabase-js';
export type LogInParams = {
    email: string;
    password: string;
};
export type CreateClientParams = {
    url: string;
    key: string;
    options?: SupabaseClientOptions<'public'>;
};
export type ExecFunctionParams = {
    schema: string;
    name: string;
    args?: Record<string, any>;
};
export type UpdateUserParams = {
    uid: string;
    attributes: AdminUserAttributes;
};
export type SignUpParams = SignUpWithPasswordCredentials;
