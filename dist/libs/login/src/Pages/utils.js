import supabase, { logIn } from "../../../../libs/supabase";
export const getAbbreviatedName = ({ firstname, lastname, mail }) => {
    // Si tiene "firstname" y "lastname", se usa la primera letra de cada uno
    // Si solo tiene firstname, se usa las primeras dos letras de "firstname"
    // Si solo tiene lastname, se usa las primeras dos letras de "lastname"
    // No tiene ninguno, se usa las primeras dos letras de "mail"
    const f = firstname?.[0] ?? '';
    const l = lastname?.[0] ?? '';
    let name = '';
    if (f && l)
        name = f + l;
    else if (f)
        name = f + (firstname?.[1] ?? f);
    else if (l)
        name = l + (lastname?.[1] ?? l);
    else
        name = mail?.slice(0, 2) ?? '';
    return name.toUpperCase();
};
export const handleSubmitLogIn = async ({ username, router }) => {
    username = username.trim();
    const mail = username.includes('@') ? username : `${username}@pytech.com`;
    const { data, error } = await supabase.schema('admin').from('perfiles').select('firstname,secondname,lastname,color').eq('mail', mail);
    if (error)
        return { succeded: false, message: error.message };
    if (data.length === 0)
        return { succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.' };
    // Success
    router.push({ pathname: '/login/inicio/perfil', params: { ...data[0], mail: mail } });
    return { succeded: true, message: '' };
};
export const handleSubmitLogInPerfil = async ({ mail, password }) => {
    password = password.trim();
    const { data, error } = await logIn({ email: mail, password });
    if (error) {
        if (error.message === 'Invalid login credentials') {
            return { succeded: false, message: 'La contraseña que ingresaste es incorrecta, vuelve a intentarlo.' };
        }
        return { succeded: false, message: error.message };
    }
    return { succeded: true, message: '' };
};
