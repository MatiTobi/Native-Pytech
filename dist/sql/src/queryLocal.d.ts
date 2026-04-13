declare const queryLocal: ({ query, params, onlyExecute }: {
    query: string;
    params?: any[];
    onlyExecute?: boolean;
}) => Promise<any[]>;
export default queryLocal;
