import dbRef from './init';
const queryLocal = async ({ query, params, getReturn = true }) => {
    if (!dbRef.current)
        throw new Error('Database not initialized');
    try {
        if (getReturn)
            return await (dbRef.current.getAllAsync(query, params));
        await dbRef.current.execAsync(query);
    }
    catch (e) {
        console.error('Error queryLocal:', e, query.slice(0, 100), params);
    }
    return [];
};
export default queryLocal;
