import dbRef from './init'



const queryLocal = async ({
    query,
    params=[],
    onlyExecute=false

}: {
    query: string
    params?: any[]
    onlyExecute?: boolean
    
}): Promise<any[]> => {

    if (!dbRef.current) throw new Error('Database not initialized')

    try{
        if(!onlyExecute) return await (dbRef.current.getAllAsync(query, params))
        await dbRef.current.execAsync(query)
    } catch (e) { console.error('Error queryLocal:', e, query.slice(0, 100), params) }
    return []
}

export default queryLocal