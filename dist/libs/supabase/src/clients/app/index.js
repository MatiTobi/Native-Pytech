import client from './config';
import * as utils from './utils';
const supabase = {
    client,
    ...utils,
};
export default supabase;
