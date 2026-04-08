import { Platform, StyleProp } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as Device from 'expo-device'



export const addProps = (element: React.ReactElement | null, additionalStyles: StyleProp<any> = [], extraProps: Record<string, any> = {}): React.ReactElement | null => {
    if (!React.isValidElement(element)) return null;

    return React.cloneElement<any>(element, {
        style: [
            (element.props as any).style,
            ...additionalStyles
        ],
        ...extraProps
    })
}


const formatter = new Intl.NumberFormat('es-AR')
export const numberFormat = (value: number): string => {
	const abs = formatter.format(Math.abs(value))
	return value < 0 ? `(${abs})` : abs
}


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



export const getDeviceTier = () : 'low' | 'medium' | 'high' => {
	if (Platform.OS !== 'android') return 'high'
  
	const ramGB = Device.totalMemory
	  ? Device.totalMemory / 1024 / 1024 / 1024
	  : 0
  
	if (ramGB > 0 && ramGB <= 4) return 'low'
	if (ramGB <= 6) return 'medium'
	return 'high'
}