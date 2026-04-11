import supabase from './config';
import { expoEnv } from '../../constants/constants';
const { SUPABASE_USERNAME_LOGIN, SUPABASE_PASSWORD_LOGIN } = expoEnv;
export const logIn = async ({ email = SUPABASE_USERNAME_LOGIN, password = SUPABASE_PASSWORD_LOGIN } = {}) => {
    return await supabase.auth.signInWithPassword({
        email,
        password
    });
};
export const logOut = async () => await supabase.auth.signOut();
