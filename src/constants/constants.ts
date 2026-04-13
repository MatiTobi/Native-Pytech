import { Platform } from 'react-native'
import { _getDeviceTier } from './utils'
import Constants from 'expo-constants'



export const deviceTier = _getDeviceTier()
export const isLowTier = Platform.OS === 'android' && deviceTier === 'low'


type ExpoEnv = {
    SUPABASE_USERNAME_LOGIN: string
    SUPABASE_PASSWORD_LOGIN: string
    SUPABASE_URL: string
    SUPABASE_KEY: string
}
export const expoEnv: Partial<ExpoEnv> = Constants.expoConfig?.extra || {}


export const screenOptions = {
    headerTitleAlign: "center", 
    headerBackButtonMenuEnabled: true,
    headerBackButtonDisplayMode: 'default',
    headerTransparent: Platform.OS === 'ios',
    headerLargeTitle: true,
}