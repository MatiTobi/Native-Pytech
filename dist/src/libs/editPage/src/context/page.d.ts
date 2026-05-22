import type { Observable } from '@legendapp/state';
import { RefObject } from 'react';
import type { Store } from '../components/Wrapper/types';
export type TextFieldsRefsType = Record<number | string, RefObject<any>>;
export declare const Provider: import("react").Provider<{
    store: Observable<Store>;
    registerItem: (itemKey?: string, ref?: RefObject<any>) => string | number;
    onSubmit: (itemKey: string | number) => Promise<void>;
} | null>, usePage: () => {
    store: Observable<Store>;
    registerItem: (itemKey?: string, ref?: RefObject<any>) => string | number;
    onSubmit: (itemKey: string | number) => Promise<void>;
};
