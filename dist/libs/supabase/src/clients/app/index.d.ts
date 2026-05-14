declare const supabase: {
    logIn: ({ email, password }?: {
        email?: string;
        password?: string;
    }) => Promise<import("@supabase/auth-js").AuthTokenResponsePassword>;
    logOut: () => Promise<{
        error: import("@supabase/auth-js").AuthError | null;
    }>;
    getUser: () => Promise<import("@supabase/auth-js").User>;
    execFunction: (params: import("../../utils/types").ExecFunctionParams) => Promise<any>;
    signUp: (params: import("../../utils/types").SignUpParams) => Promise<import("@supabase/auth-js").AuthResponse>;
    client: import("@supabase/supabase-js").SupabaseClient<any, "public", "public", any, any>;
};
export default supabase;
export type SupabaseApp = typeof supabase;
