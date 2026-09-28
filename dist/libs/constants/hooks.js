import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useFocusEffect } from 'expo-router';
const useEffectWithoutFirstRender = (effect, deps) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return void effect();
    }, deps);
};
const useLayoutEffectWithoutFirstRender = (effect, deps) => {
    const isFirstRender = useRef(true);
    useLayoutEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
};
const useAsyncEffect = (effect, deps) => {
    useEffect(() => {
        let mounted = true;
        const isMounted = () => mounted;
        effect(isMounted);
        return () => { mounted = false; };
    }, deps);
};
const useAsyncEffectWithoutFirstRender = (effect, deps) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        let mounted = true;
        const isMounted = () => mounted;
        void effect(isMounted);
        return () => { mounted = false; };
    }, deps);
};
const useAsyncFocusEffect = (effect) => {
    const effectRef = useRef(effect);
    useEffect(() => { effectRef.current = effect; }, [effect]);
    useFocusEffect(useCallback(() => {
        let mounted = true;
        const isMounted = () => mounted;
        void effectRef.current(isMounted);
        return () => { mounted = false; };
    }, []));
};
const useAsyncFocusEffectWithoutFirstRender = (effect) => {
    const isFirstFocus = useRef(true);
    const effectRef = useRef(effect);
    useEffect(() => { effectRef.current = effect; }, [effect]);
    useFocusEffect(useCallback(() => {
        let mounted = true;
        const isMounted = () => mounted;
        if (isFirstFocus.current)
            isFirstFocus.current = false;
        else
            void effectRef.current(isMounted);
        return () => { mounted = false; };
    }, []));
};
// ------------------- Export -------------------
const Hooks = {
    useEffectWithoutFirstRender,
    useLayoutEffectWithoutFirstRender,
    useAsyncEffect,
    useAsyncEffectWithoutFirstRender,
    useAsyncFocusEffect,
    useAsyncFocusEffectWithoutFirstRender,
};
export default Hooks;
