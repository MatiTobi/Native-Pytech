import { Router } from 'expo-router';
export declare const getAbbreviatedName: ({ firstname, lastname, mail }: {
    firstname?: string;
    lastname?: string;
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
