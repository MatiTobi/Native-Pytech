declare const queryLocal: ({ query, params, getReturn }: {
    query: string;
    params?: any[];
    getReturn?: boolean;
}) => Promise<any[]>;
export default queryLocal;
