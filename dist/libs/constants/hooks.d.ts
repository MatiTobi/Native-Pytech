declare const Hooks: {
    useEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
    useLayoutEffectWithoutFirstRender: (effect: () => void, deps: any[]) => void;
    useAsyncEffect: (effect: (isMounted: () => boolean) => Promise<any>, deps: any[]) => void;
    useAsyncFocusEffect: (effect: (isMounted: () => boolean) => Promise<any>) => void;
    useAsyncFocusEffectWithoutFirstRender: (effect: (isMounted: () => boolean) => Promise<any>) => void;
};
export default Hooks;
