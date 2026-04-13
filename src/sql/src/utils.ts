import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SQLite from 'expo-sqlite'

import dbRef from './init'



export const reset = async ({currentVersion}: {currentVersion?: number}) => {

    console.log('Reiniciando base de datos...')

    try { await SQLite.deleteDatabaseAsync('app.db') }
    catch (e){
        if (e.message.includes('currently open')){
            dbRef.current = await SQLite.openDatabaseAsync('app.db')
            await dbRef.current.closeAsync()
            dbRef.current.closeSync()
            await SQLite.deleteDatabaseAsync('app.db')
        } else console.error('Error eliminando base de datos:', e)
    }
    if (currentVersion) await AsyncStorage.setItem('DB_VERSION', String(currentVersion))
}


export const _hasTables = async (): Promise<boolean> => {
    try {
        const listTables = await dbRef.current.getAllAsync("SELECT name FROM sqlite_master WHERE type='table'")
        return listTables.length > 0
    } catch (e) {
        console.error('Error verificando DB:', e)
        return false
    }
}


export const _createTables = async ({listQueries, queryOnCreate}: {listQueries: string[], queryOnCreate?: string}): Promise<boolean> => {

    console.log('Creando tablas...')

    for (const query of listQueries){

        // Ejecuta
        try { await _executeSQL({query}) }
        catch (e){
            console.error('Error creando tablas:', e)
            await AsyncStorage.removeItem('DB_VERSION')
            return false
        }
    }

    if (queryOnCreate) await _executeSQL({query: queryOnCreate})
    return true
}


export const _executeSQL = async ({query}: {query: string}): Promise<void> => {

    const splitStr = query.includes('END;') ? 'END;' : ';'
    const statements = query.split(splitStr).map(s => s.trim()).filter(Boolean)
  
    for (const statement of statements){
        const query = `${statement}\n${splitStr}`
        await dbRef.current.execAsync(query)
    }
}