import { expoEnv } from 'constants/constants'
import { createClient } from '@supabase/supabase-js'
import { Platform } from 'react-native'
import type AsyncStorageType from '@react-native-async-storage/async-storage'

import 'react-native-url-polyfill/auto'
import { Buffer } from 'buffer'
global.Buffer = global.Buffer ?? Buffer



// AsyncStorage
const isWeb = Platform.OS === 'web'

const asyncStorage: typeof AsyncStorageType | undefined = !isWeb
    ? require('@react-native-async-storage/async-storage')?.default
    : undefined


// Configuración
const { SUPABASE_URL, SUPABASE_KEY } = expoEnv

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: true,
            detectSessionInUrl: false,
            storage: asyncStorage
        }
    }
)
export default supabase