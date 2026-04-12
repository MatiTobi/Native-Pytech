import * as SQLite from 'expo-sqlite';
declare let db: undefined | SQLite.SQLiteDatabase;
export declare const init: ({ currentVersion, listTablesPaths, sqlOnCreateTables, sqlOnDbExists }: {
    currentVersion: number;
    listTablesPaths: string[];
    sqlOnCreateTables?: string;
    sqlOnDbExists?: string;
}) => Promise<boolean>;
export declare const reset: ({ currentVersion }: {
    currentVersion?: number;
}) => Promise<void>;
export default db;
