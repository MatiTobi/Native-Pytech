import * as SQLite from 'expo-sqlite';
declare const dbRef: {
    current: SQLite.SQLiteDatabase | undefined;
};
export declare const init: ({ currentVersion, listTablesPaths, sqlOnCreateTables, sqlOnDbExists }: {
    currentVersion: number;
    listTablesPaths: string[];
    sqlOnCreateTables?: string;
    sqlOnDbExists?: string;
}) => Promise<boolean>;
export default dbRef;
