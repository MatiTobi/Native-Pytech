import supabase from './config'
import * as utils from '../../utils'
import { AdminUserAttributes } from '@supabase/supabase-js'


export const getUserById = async (uid: string) => (
    await utils.getUserById(supabase, { uid })
)


export const updateUser = async (
    uid: string,
    attributes: utils.types.UpdateUserParams['attributes']
) => (
    await utils.updateUser(supabase, {uid, attributes})
)


export const deleteUser = async (uid: string) => (
    await utils.deleteUser(supabase, { uid })
)

