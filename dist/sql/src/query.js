import db from './init';
export default async ({ query, params, getReturn = true }) => {
    if (!db)
        throw new Error('Database not initialized');
    try {
        if (getReturn)
            return await db.getAllAsync(query, params);
        await db.execAsync(query);
    }
    catch (e) {
        console.error('Error queryLocal:', e, query.slice(0, 100), params);
    }
    return [];
};
