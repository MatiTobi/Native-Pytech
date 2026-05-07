import supabase from "../../../../libs/supabase";
export const handleSubmitLogIn = async ({ username, router }) => {
    const identifier = username.trim();
    const data = await supabase.execFunction({
        name: 'login',
        args: { p_identifier: identifier }
    });
    if (!data)
        return { succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.' };
    // Success
    router.push({ pathname: '/login/inicio/perfil', params: data });
    return { succeded: true, message: '' };
};
export const handleSubmitLogInPerfil = async ({ mail, password }) => {
    password = password.trim();
    const { data, error } = await supabase.logIn({ email: mail, password });
    if (error) {
        if (error.message === 'Invalid login credentials') {
            return { succeded: false, message: 'La contraseña que ingresaste es incorrecta, vuelve a intentarlo.' };
        }
        return { succeded: false, message: error.message };
    }
    return { succeded: true, message: '' };
};
