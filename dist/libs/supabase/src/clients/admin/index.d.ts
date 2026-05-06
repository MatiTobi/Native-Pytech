declare const supabase: {
    getUserById: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
    updateUser: (uid: string, attributes: import("../../utils/types").UpdateUserParams["attributes"]) => Promise<import("@supabase/auth-js").UserResponse>;
    deleteUser: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
    client: import("@supabase/supabase-js").SupabaseClient<any, "public", "public", any, any>;
};
export default supabase;
export type SupabaseAdmin = typeof supabase;
