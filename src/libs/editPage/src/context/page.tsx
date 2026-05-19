import type { Observable } from '@legendapp/state';
import { TextFieldRef } from '@expo/ui/swift-ui';
import { RefObject } from 'react';

import Utils from '@/libs/constants/utils';
import type { Store } from '../components/Wrapper/types';



export type TextFieldsRefsType = Record<number|string, RefObject<any>>

export const [Provider, usePage] = Utils.createCtx<{
	store: Observable<Store>
	registerItem: (itemKey?: string, ref?: RefObject<any>) => string | number
	onSubmit: (itemKey: string | number) => Promise<void>
}>()
