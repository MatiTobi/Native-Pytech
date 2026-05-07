import supabase from "../../../../libs/supabase";
export const getAbbreviatedName = ({ first_name, last_name, mail }) => {
    // Si tiene "firstname" y "lastname", se usa la primera letra de cada uno
    // Si solo tiene firstname, se usa las primeras dos letras de "firstname"
    // Si solo tiene lastname, se usa las primeras dos letras de "lastname"
    // No tiene ninguno, se usa las primeras dos letras de "mail"
    const f = first_name?.[0] ?? '';
    const l = last_name?.[0] ?? '';
    let name = '';
    if (f && l)
        name = f + l;
    else if (f)
        name = f + (first_name?.[1] ?? f);
    else if (l)
        name = l + (last_name?.[1] ?? l);
    else
        name = mail?.slice(0, 2) ?? '';
    return name.toUpperCase();
};
export const handleSubmitLogIn = async ({ username, router }) => {
    /*username = username.trim()
    const mail = username.includes('@') ? username : `${username}@pytech.com`

    // Obtengo el user_id
    const { data: dataUsers, error: errorUsers } = await supabase.client.schema('admin').from('users').select('id').eq('mail', mail)
    if (errorUsers) return {succeded: false, message: errorUsers.message}
    if (dataUsers.length === 0) return {succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.'}

    // Obtengo los datos del perfil
    const { data, error } = await supabase.client.schema('admin').from('profiles').select('first_name,second_name,last_name,color').eq('user_id', dataUsers[0].id)
    if (error)  return {succeded: false, message: error.message}
    if (data.length === 0) return {succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.'}*/
    const { data, error } = await supabase.execFunction({
        name: 'login',
        args: { p_identifier: username }
    });
    console.log('login', data);
    if (error)
        return { succeded: false, message: error.message };
    if (!data)
        return { succeded: false, message: 'Revisa la información de la cuenta que ingresaste y vuelve a intentarlo.' };
    // Success
    router.push({ pathname: '/login/inicio/perfil', params: { ...data, user_id: data.user_id, mail: data.email } });
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
