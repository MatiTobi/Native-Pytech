import Utils from '@/libs/constants/utils';


export const [Provider, useItem] = Utils.createCtx<{
	index: number
	nextIndex?: number
}>()
