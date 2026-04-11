import { expoEnv } from '../../constants/constants';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = global.Buffer ?? Buffer;
// AsyncStorage
const isWeb = Platform.OS === 'web';
const asyncStorage = !isWeb
    //? require('@react-native-async-storage/async-storage')?.default
    ? undefined
    : undefined;
// Configuración
const { SUPABASE_URL, SUPABASE_KEY } = expoEnv;
export default createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: true,
        detectSessionInUrl: false,
        storage: asyncStorage
    }
});
