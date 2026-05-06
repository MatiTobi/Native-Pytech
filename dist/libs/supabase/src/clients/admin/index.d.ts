declare const supabase: {
    client: import("@supabase/supabase-js").SupabaseClient<any, "public", "public", any, any>;
};
export default supabase;
export type SupabaseAdmin = typeof supabase;
