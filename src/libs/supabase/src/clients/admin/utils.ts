import supabase from './config'
import * as utils from '../../utils'


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


export const newUser = async (attributes: utils.types.NewUserParams) => (
    await utils.newUser(supabase, attributes)
)

