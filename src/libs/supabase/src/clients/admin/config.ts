import { expoEnv } from 'libs/constants/consts'
import * as utils from '../../utils'



const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = expoEnv
if (!SUPABASE_URL) throw new Error('SUPABASE_URL is not set')
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')


const supabase = utils.createClient({
    url: SUPABASE_URL,
    key: SUPABASE_SERVICE_ROLE_KEY,
    options: {
        auth: {
            autoRefreshToken: false,
            persistSession: true,
        }
    }
})
export default supabase