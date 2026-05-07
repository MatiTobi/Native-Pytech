import { createCtx } from 'libs/constants/utils';


export const [Provider, useItem] = createCtx<{
	index: number
	nextIndex?: number
}>()
