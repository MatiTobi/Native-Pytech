import type { Observable } from '@legendapp/state';
import { createContext, useContext } from 'react';

import TableProps from './types';



export type TableStore = {
	pressed_id: string | null;
	deleted: {
		setted: boolean;
		id: string | null;
		keys: string[] | undefined;
		lastId: string | null;
		firstId: string | null;
	}
	borders: Map<string, {top: (show: boolean) => void, bottom: (show: boolean) => void}>;
}


export const StoreContext = createContext<Observable<TableStore> | null>(null);
export const useStore = () => {
	const context = useContext(StoreContext)
	if (!context) throw new Error('useStore debe usarse dentro del Provider')
	return context
}


export const BordersContext = createContext<Observable<TableStore>['borders'] | null>(null)
export const useBorders = () => {
    const context = useContext(BordersContext)
    if (!context) throw new Error('useBorders debe usarse dentro de un BordersContext.Provider')
    return context
}


export const TableContext = createContext<{colorThemeType: TableProps['colorThemeType'], allBorders: TableProps['allBorders'], type: TableProps['type'], keys: TableProps['keys'], deviceTier: 'high' | 'medium' | 'low'} | null>(null)
export const useTable = () => {
    const context = useContext(TableContext)
    if (!context) throw new Error('useTable debe usarse dentro de un TableContext.Provider')
    return context
}