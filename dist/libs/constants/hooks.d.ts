export declare function useEffectWithoutFirstRender(effect: () => void, deps: any[]): void;
export declare function useLayoutEffectWithoutFirstRender(effect: () => void, deps: any[]): void;
export declare function useAsyncEffect(effect: (isMounted: () => boolean) => Promise<void>, deps: any[]): void;
export declare function useAsyncFocusEffect(effect: (isMounted: () => boolean) => Promise<void>): void;
