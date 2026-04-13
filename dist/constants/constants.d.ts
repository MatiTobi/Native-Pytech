export declare const deviceTier: "low" | "medium" | "high";
export declare const isLowTier: boolean;
type ExpoEnv = {
    SUPABASE_USERNAME_LOGIN: string;
    SUPABASE_PASSWORD_LOGIN: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
};
export declare const expoEnv: Partial<ExpoEnv>;
export declare const screenOptions: {
    headerTitleAlign: string;
    headerBackButtonMenuEnabled: boolean;
    headerBackButtonDisplayMode: string;
    headerTransparent: boolean;
    headerLargeTitle: boolean;
};
export {};
