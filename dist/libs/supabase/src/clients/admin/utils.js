import supabase from './config';
import * as utils from '../../utils';
export const getUserById = async (uid) => (await utils.getUserById(supabase, { uid }));
export const updateUser = async (uid, attributes) => (await utils.updateUser(supabase, { uid, attributes }));
export const deleteUser = async (uid) => (await utils.deleteUser(supabase, { uid }));
