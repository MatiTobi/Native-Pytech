import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';
import dbRef from './init';
export const reset = async ({ currentVersion }) => {
    console.log('Reiniciando base de datos...');
    try {
        await SQLite.deleteDatabaseAsync('app.db');
    }
    catch (e) {
        if (e.message.includes('currently open')) {
            dbRef.current = await SQLite.openDatabaseAsync('app.db');
            await dbRef.current.closeAsync();
            dbRef.current.closeSync();
            await SQLite.deleteDatabaseAsync('app.db');
        }
        else
            console.error('Error eliminando base de datos:', e);
    }
    if (currentVersion)
        await AsyncStorage.setItem('DB_VERSION', String(currentVersion));
};
export const _hasTables = async () => {
    try {
        const listTables = await dbRef.current.getAllAsync("SELECT name FROM sqlite_master WHERE type='table'");
        return listTables.length > 0;
    }
    catch (e) {
        console.error('Error verificando DB:', e);
        return false;
    }
};
export const _createTables = async ({ listTablesPaths, sqlOnCreateTables }) => {
    console.log('Creando tablas...');
    for (const path of listTablesPaths) {
        // Importa el contenido del archivo SQL desde el usuario
        const { createRequire } = require('module');
        const requireFromUser = createRequire(process.cwd() + '/');
        const sql = requireFromUser(path);
        // Ejecuta
        try {
            await _executeSQL({ sql: sql.default });
        }
        catch (e) {
            console.error('Error creando tablas:', e);
            await AsyncStorage.removeItem('DB_VERSION');
            return false;
        }
    }
    if (sqlOnCreateTables)
        await _executeSQL({ sql: sqlOnCreateTables });
    return true;
};
export const _executeSQL = async ({ sql }) => {
    const splitStr = sql.includes('END;') ? 'END;' : ';';
    const statements = sql.split(splitStr).map(s => s.trim()).filter(Boolean);
    for (const statement of statements) {
        const query = `${statement}\n${splitStr}`;
        await dbRef.current.execAsync(query);
    }
};
