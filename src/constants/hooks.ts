import { useEffect, useLayoutEffect, useRef } from 'react'



export function useEffectWithoutFirstRender(effect: () => void, deps: any[]) {
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        return effect()
    }, deps)
}


export function useLayoutEffectWithoutFirstRender(effect: () => void, deps: any[]) {
    const isFirstRender = useRef(true)

    useLayoutEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        return effect()
    }, deps)
}


export function useAsyncEffect(
    effect: (isMounted: () => boolean) => Promise<void>,
    deps: any[]
){
    useEffect(() => {
        let mounted = true
        const isMounted = () => mounted

        effect(isMounted)

        return () => { mounted = false }
    }, deps)
}