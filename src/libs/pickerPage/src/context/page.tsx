import Utils from '@/libs/constants/utils';


export const [Provider, usePage] = Utils.createCtx<{
	selected?: string
	onSelectionChange?: (selection: string) => void
}>()