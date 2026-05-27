export declare const reset: ({ currentVersion }: {
    currentVersion?: number;
}) => Promise<void>;
export declare const _hasTables: () => Promise<boolean>;
export declare const _createTables: ({ listQueries, queryOnCreate }: {
    listQueries: string[];
    queryOnCreate?: string;
}) => Promise<boolean>;
export declare const _executeSQL: ({ query }: {
    query: string;
}) => Promise<void>;
