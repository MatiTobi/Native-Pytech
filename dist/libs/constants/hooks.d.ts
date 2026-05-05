export declare const useEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
export declare const useLayoutEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
export declare const useAsyncEffect: (effect: (isMounted: () => boolean) => Promise<void>, deps: any[]) => void;
export declare const useAsyncFocusEffect: (effect: (isMounted: () => boolean) => Promise<void>) => void;
export declare const useAsyncFocusEffectWithoutFirstRender: (effect: (isMounted: () => boolean) => Promise<void>) => void;
