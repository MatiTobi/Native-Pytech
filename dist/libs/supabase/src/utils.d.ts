import { User } from '@supabase/supabase-js';
export declare const logIn: ({ email, password }?: {
    email?: string;
    password?: string;
}) => Promise<import("@supabase/auth-js").AuthTokenResponsePassword>;
export declare const logOut: () => Promise<{
    error: import("@supabase/auth-js").AuthError | null;
}>;
export declare const getUser: () => Promise<User | undefined>;
