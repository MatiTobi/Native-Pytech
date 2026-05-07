import type { Observable } from '@legendapp/state';
import { TextFieldRef } from '@expo/ui/swift-ui';
import type { RefObject } from 'react';

import { createCtx } from 'libs/constants/utils';
import type { Store } from '../components/Page/types';



export type TextFieldsRefsType = Record<number, RefObject<TextFieldRef|null>>

export const [Provider, usePage] = createCtx<{
	store: Observable<Store>
	saveEnabledRef: RefObject<boolean>
	onPressSave: () => Promise<void>
	isUniqueItem: boolean
	textFieldsRefs: RefObject<TextFieldsRefsType>
}>()
