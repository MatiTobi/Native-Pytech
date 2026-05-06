import { Platform } from 'react-native';
import { _getDeviceTier } from './utils';
import Constants from 'expo-constants';
export const deviceTier = _getDeviceTier();
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low';
const getExpoEnv = () => {
    const expoEnv = Constants.expoConfig?.extra || {};
    return {
        SUPABASE_USERNAME_LOGIN: expoEnv.SUPABASE_USERNAME_LOGIN || process.env.SUPABASE_USERNAME_LOGIN,
        SUPABASE_PASSWORD_LOGIN: expoEnv.SUPABASE_PASSWORD_LOGIN || process.env.SUPABASE_PASSWORD_LOGIN,
        SUPABASE_URL: expoEnv.SUPABASE_URL || process.env.SUPABASE_URL,
        SUPABASE_KEY: expoEnv.SUPABASE_KEY || process.env.SUPABASE_KEY,
        SUPABASE_SERVICE_ROLE_KEY: expoEnv.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY,
    };
};
export const expoEnv = getExpoEnv();
console.log('expoEnv', expoEnv);
export const screenOptions = {
    headerTitleAlign: "center",
    headerBackButtonMenuEnabled: true,
    headerBackButtonDisplayMode: 'minimal',
    headerTransparent: Platform.OS === 'ios',
    headerLargeTitle: true,
};
