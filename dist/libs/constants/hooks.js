import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useFocusEffect } from 'expo-router';
export const useEffectWithoutFirstRender = (effect, deps) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
};
export const useLayoutEffectWithoutFirstRender = (effect, deps) => {
    const isFirstRender = useRef(true);
    useLayoutEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
};
export const useAsyncEffect = (effect, deps) => {
    useEffect(() => {
        let mounted = true;
        const isMounted = () => mounted;
        effect(isMounted);
        return () => { mounted = false; };
    }, deps);
};
export const useAsyncFocusEffect = (effect) => {
    useFocusEffect(useCallback(() => {
        let mounted = true;
        const isMounted = () => mounted;
        void effect(isMounted);
        return () => { mounted = false; };
    }, [effect]));
};
export const useAsyncFocusEffectWithoutFirstRender = (effect) => {
    const isFirstFocus = useRef(true);
    useFocusEffect(useCallback(() => {
        let mounted = true;
        const isMounted = () => mounted;
        if (isFirstFocus.current)
            isFirstFocus.current = false;
        else
            void effect(isMounted);
        return () => { mounted = false; };
    }, [effect]));
};
