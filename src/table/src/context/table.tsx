import type { Observable } from '@legendapp/state';

import Props, { Store } from '../components/Table/types';
import { createCtx } from '../../../constants/utils';



export const [StoreProvider, useStore] = createCtx<Observable<Store>>()

export const [BordersProvider, useBorders] = createCtx<Observable<Store>['borders']>()

export const [TableProvider, useTable] = createCtx<{
	colorThemeType: Props['colorThemeType'],
	allBorders: Props['allBorders'],
	type: Props['type'],
	keys: Props['keys'],
	deviceTier: 'high' | 'medium' | 'low'
}>()