import * as SQLite from 'expo-sqlite';
declare const dbRef: {
    current: SQLite.SQLiteDatabase | undefined;
};
export declare const init: ({ currentVersion, listQueriesTables, queryOnCreateTables, queryOnExists }: {
    /**
        Versión actual de la base de datos.
        Se utiliza para reiniciarla a mano.
    */
    currentVersion: number;
    /**
        Listado de queries para crear las tablas.
    */
    listQueriesTables: string[];
    /**
        Cuando se crean las tablas, se ejecuta esta query.
    */
    queryOnCreateTables?: string;
    /**
        Si la base de datos ya existía (no la está creando), se ejecuta esta query.
    */
    queryOnExists?: string;
}) => Promise<boolean>;
export default dbRef;
