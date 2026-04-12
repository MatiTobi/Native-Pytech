import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';
let db = undefined;
export const init = async ({ currentVersion, listTablesPaths, sqlOnCreateTables, sqlOnDbExists }) => {
    // Se fija si tiene que reinicar la base de datos
    const savedVersion = await AsyncStorage.getItem('DB_VERSION');
    //if (savedVersion === null && Platform.OS === 'android') savedVersion = String(DB_VERSION)
    console.log('version:', currentVersion);
    console.log('AsyncStorage (DB_VERSION):', savedVersion);
    if (savedVersion !== String(currentVersion))
        await reset({ currentVersion });
    // Inicia la base de datos
    db = await SQLite.openDatabaseAsync('app.db');
    if (!await _hasTables()) {
        const created = await _createTables({ listTablesPaths, sqlOnCreateTables });
        if (!created)
            return false;
    }
    else if (sqlOnDbExists)
        await _executeSQL({ sql: sqlOnDbExists });
    // En la web se usa memoria temporal (RAM) para que la view_rutas funcione
    if (Platform.OS === 'web')
        await db.execAsync('PRAGMA temp_store = MEMORY');
    await db.execAsync('PRAGMA journal_mode = WAL');
    return true;
};
export const reset = async ({ currentVersion }) => {
    console.log('Reiniciando base de datos...');
    try {
        await SQLite.deleteDatabaseAsync('app.db');
    }
    catch (e) {
        if (e.message.includes('currently open')) {
            db = await SQLite.openDatabaseAsync('app.db');
            await db.closeAsync();
            db.closeSync();
            await SQLite.deleteDatabaseAsync('app.db');
        }
        else
            console.error('Error eliminando base de datos:', e);
    }
    if (currentVersion)
        await AsyncStorage.setItem('DB_VERSION', String(currentVersion));
};
const _hasTables = async () => {
    try {
        const listTables = await db.getAllAsync("SELECT name FROM sqlite_master WHERE type='table'");
        return listTables.length > 0;
    }
    catch (e) {
        console.error('Error verificando DB:', e);
        return false;
    }
};
const _createTables = async ({ listTablesPaths, sqlOnCreateTables }) => {
    console.log('Creando tablas...');
    for (const path of listTablesPaths) {
        const sql = require(path);
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
const _executeSQL = async ({ sql }) => {
    const splitStr = sql.includes('END;') ? 'END;' : ';';
    const statements = sql.split(splitStr).map(s => s.trim()).filter(Boolean);
    for (const statement of statements) {
        const query = `${statement}\n${splitStr}`;
        await db.execAsync(query);
    }
};
export default db;
