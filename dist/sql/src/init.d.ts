import * as SQLite from 'expo-sqlite';
declare const dbRef: {
    current: SQLite.SQLiteDatabase | undefined;
};
export declare const init: ({ currentVersion, listQueriesTables, queryOnCreateTables, queryOnExists }: {
    currentVersion: number;
    listQueriesTables: string[];
    queryOnCreateTables?: string;
    queryOnExists?: string;
}) => Promise<boolean>;
export default dbRef;
