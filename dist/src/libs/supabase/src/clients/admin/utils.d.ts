import * as utils from '../../utils';
export declare const getUserById: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const updateUser: (uid: string, attributes: utils.types.UpdateUserParams["attributes"]) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const deleteUser: (uid: string) => Promise<import("@supabase/auth-js").UserResponse>;
export declare const newUser: (attributes: utils.types.NewUserParams) => Promise<import("@supabase/auth-js").UserResponse>;
