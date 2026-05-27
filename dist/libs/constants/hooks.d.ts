declare const Hooks: {
    useEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
    useLayoutEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
    useAsyncEffect: (effect: (isMounted: () => boolean) => Promise<void>, deps: any[]) => void;
    useAsyncFocusEffect: (effect: (isMounted: () => boolean) => Promise<void>) => void;
    useAsyncFocusEffectWithoutFirstRender: (effect: (isMounted: () => boolean) => Promise<void>) => void;
};
export default Hooks;
