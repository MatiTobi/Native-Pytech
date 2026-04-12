export declare const reset: ({ currentVersion }: {
    currentVersion?: number;
}) => Promise<void>;
export declare const _hasTables: () => Promise<boolean>;
export declare const _createTables: ({ listTablesPaths, sqlOnCreateTables }: {
    listTablesPaths: string[];
    sqlOnCreateTables?: string;
}) => Promise<boolean>;
export declare const _executeSQL: ({ sql }: {
    sql: string;
}) => Promise<void>;
