import { Router } from 'expo-router';
import { PerfilColorType } from '../constants';
export type LoginData = {
    first_name: string;
    abbreviation: string;
    color: PerfilColorType;
    mail: string;
};
export declare const handleSubmitLogIn: ({ username, router }: {
    username: string;
    router: Router;
}) => Promise<{
    succeded: boolean;
    message: string;
}>;
export declare const handleSubmitLogInPerfil: ({ mail, password }: {
    mail: string;
    password: string;
}) => Promise<{
    succeded: boolean;
    message: string;
}>;
