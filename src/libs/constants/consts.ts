import { Platform } from 'react-native'
import Utils from './utils'
import Constants from 'expo-constants'
import { NativeStackNavigationOptions } from "expo-router/build/react-navigation/native-stack/types";


export const deviceTier = Utils._getDeviceTier()
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low'


type ExpoEnv = {
    SUPABASE_URL: string
    SUPABASE_KEY: string
    SUPABASE_SERVICE_ROLE_KEY: string
}

const getExpoEnv: () => Partial<ExpoEnv> = () => {
    const expoEnv = Constants.expoConfig?.extra || {}
    
    return {
        SUPABASE_URL: expoEnv.SUPABASE_URL || process.env.SUPABASE_URL,
        SUPABASE_KEY: expoEnv.SUPABASE_KEY || process.env.SUPABASE_KEY,
        SUPABASE_SERVICE_ROLE_KEY: expoEnv.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY,
    }
}
export const expoEnv = getExpoEnv()


export const screenOptions:NativeStackNavigationOptions = {
    headerTitleAlign: "center", 
    headerBackButtonMenuEnabled: true,
    headerBackButtonDisplayMode: 'minimal',
    headerTransparent: Platform.OS === 'ios',
    headerLargeTitle: true,
}