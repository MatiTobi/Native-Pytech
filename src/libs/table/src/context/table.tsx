import type { Observable } from '@legendapp/state';

import Props, { Store } from '../components/Table/types';
import { createCtx } from '../../../constants/utils';



export const [StoreProvider, useStore] = createCtx<Observable<Store>>()

export const [BordersProvider, useBorders] = createCtx<Observable<Store>['borders']>()

export const [TableProvider, useTable] = createCtx<{
	colorThemeType: Exclude<Props['colorThemeType'], undefined>,
	allBorders: Props['allBorders'],
	type: Props['type'],
	keys: Props['keys']
}>()