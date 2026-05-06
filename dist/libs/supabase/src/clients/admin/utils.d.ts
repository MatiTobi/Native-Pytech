import * as utils from '../../utils';
export declare const getUserById: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const updateUser: (params: utils.types.UpdateUserParams) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const deleteUser: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
