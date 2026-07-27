import supabase from './config';
import * as utils from '../../utils';
export const logIn = async ({ email, password }) => (await utils.logIn(supabase, { email, password }));
export const logOut = async () => await utils.logOut(supabase);
export const getUser = async () => await utils.getUser(supabase);
export const execFunction = async (params) => (await utils.execFunction(supabase, params));
export const signUp = async (params) => (await utils.signUp(supabase, params));
export const updateMyUser = async (params) => (await utils.updateMyUser(supabase, params));
