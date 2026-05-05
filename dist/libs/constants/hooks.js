import { useEffect, useLayoutEffect, useRef } from 'react';
import { useFocusEffect } from 'expo-router';
export function useEffectWithoutFirstRender(effect, deps) {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
}
export function useLayoutEffectWithoutFirstRender(effect, deps) {
    const isFirstRender = useRef(true);
    useLayoutEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
}
export function useAsyncEffect(effect, deps) {
    useEffect(() => {
        let mounted = true;
        const isMounted = () => mounted;
        effect(isMounted);
        return () => { mounted = false; };
    }, deps);
}
export function useAsyncFocusEffect(effect) {
    useFocusEffect(() => {
        let mounted = true;
        const isMounted = () => mounted;
        effect(isMounted);
        return () => { mounted = false; };
    });
}
