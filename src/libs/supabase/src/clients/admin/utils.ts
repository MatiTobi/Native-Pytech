import supabase from './config'
import * as utils from '../../utils'


export const getUserById = async (uid: string) => (
    await utils.getUserById(supabase, { uid })
)


export const updateUser = async (params: utils.types.UpdateUserParams) => (
    await utils.updateUser(supabase, params)
)


export const deleteUser = async (uid: string) => (
    await utils.deleteUser(supabase, { uid })
)

