import * as utils from '../../utils';
export declare const logIn: ({ email, password }?: {
    email?: string;
    password?: string;
}) => Promise<import("@supabase/auth-js").AuthTokenResponsePassword>;
export declare const logOut: () => Promise<{
    error: import("@supabase/auth-js").AuthError | null;
}>;
export declare const getUser: () => Promise<import("@supabase/auth-js").User>;
export declare const execFunction: (params: utils.types.ExecFunctionParams) => Promise<any>;
export declare const signUp: (params: utils.types.SignUpParams) => Promise<import("@supabase/auth-js").AuthResponse>;
