import type { Observable } from '@legendapp/state';

import Props, { Store } from '../components/Table/types';
import Utils from '@/libs/constants/utils';



export const [StoreProvider, useStore] = Utils.createCtx<Observable<Store>>()

export const [BordersProvider, useBorders] = Utils.createCtx<Observable<Store>['borders']>()

export const [TableProvider, useTable] = Utils.createCtx<{
	colorThemeType: Exclude<Props['colorThemeType'], undefined>,
	allBorders: Props['allBorders'],
	type: Props['type'],
	keys: Props['keys']
}>()