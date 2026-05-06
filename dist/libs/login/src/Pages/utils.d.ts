import { Router } from 'expo-router';
export declare const getAbbreviatedName: ({ first_name, last_name, mail }: {
    first_name?: string;
    last_name?: string;
    mail: string;
}) => string;
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
