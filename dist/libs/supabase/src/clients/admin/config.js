import { expoEnv } from '../../../../../libs/constants/consts';
import * as utils from '../../utils';
const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = expoEnv;
const supabase = utils.createClient({
    url: SUPABASE_URL,
    key: SUPABASE_SERVICE_ROLE_KEY,
    options: {
        auth: {
            autoRefreshToken: false,
            persistSession: true,
        }
    }
});
export default supabase;
