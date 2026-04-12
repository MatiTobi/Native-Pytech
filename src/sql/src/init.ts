import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SQLite from 'expo-sqlite'
import { Platform } from 'react-native'
import { reset, _hasTables, _createTables, _executeSQL } from './utils'



const dbRef = {
    current: undefined as SQLite.SQLiteDatabase | undefined,
}


export const init = async ({
    currentVersion,
    listTablesPaths,
    sqlOnCreateTables,
    sqlOnDbExists

}: {
    currentVersion: number
    listTablesPaths: string[]
    sqlOnCreateTables?: string
    sqlOnDbExists?: string

}): Promise<boolean> => {

    // Se fija si tiene que reinicar la base de datos
    const savedVersion = await AsyncStorage.getItem('DB_VERSION')
    //if (savedVersion === null && Platform.OS === 'android') savedVersion = String(DB_VERSION)

    console.log('version:', currentVersion)
    console.log('AsyncStorage (DB_VERSION):', savedVersion)

    if (savedVersion !== String(currentVersion)) await reset({currentVersion})

    // Inicia la base de datos
    dbRef.current = await SQLite.openDatabaseAsync('app.db')

    if (!await _hasTables()){
        const created = await _createTables({listTablesPaths, sqlOnCreateTables})
        if (!created) return false
    } else if (sqlOnDbExists) await _executeSQL({sql: sqlOnDbExists}) 

    // En la web se usa memoria temporal (RAM) para que la view_rutas funcione
    if (Platform.OS === 'web') await dbRef.current.execAsync('PRAGMA temp_store = MEMORY')
    await dbRef.current.execAsync('PRAGMA journal_mode = WAL')

    return true
}


export default dbRef