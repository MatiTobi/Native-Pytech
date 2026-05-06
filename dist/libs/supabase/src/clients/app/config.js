import { expoEnv } from '../../../../../libs/constants/consts';
import * as utils from '../../utils';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';
import { Buffer } from 'buffer';
global.Buffer = global.Buffer ?? Buffer;
// AsyncStorage
const isWeb = Platform.OS === 'web';
const asyncStorage = !isWeb
    ? require('@react-native-async-storage/async-storage')?.default
    : undefined;
// Configuración
const { SUPABASE_URL, SUPABASE_KEY } = expoEnv;
const supabase = utils.createClient({
    url: SUPABASE_URL,
    key: SUPABASE_KEY,
    options: {
        auth: {
            autoRefreshToken: false,
            persistSession: true,
            detectSessionInUrl: false,
            storage: asyncStorage
        }
    }
});
export default supabase;
