import { Platform, StyleProp } from 'react-native'
import React, { createContext as reactCreateContext, useContext } from 'react'
import * as Device from 'expo-device'
import { hsla, parseToHsla, parseToRgba } from 'color2k';



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

export const numberFormatInverted = (value: string): number => {
	const trimmed = value.trim()
	const isNegative = /^\(.*\)$/.test(trimmed)
	const normalized = trimmed
		.replace(/[()]/g, '')
		.replace(/\./g, '')
		.replace(',', '.')

	const parsed = Number.parseFloat(normalized)
	if (Number.isNaN(parsed)) return 0

	return isNegative ? -parsed : parsed
}


export function applyOpacity(color: string, opacity: number) {
	try {
		const [r, g, b] = parseToRgba(color); // ignoro alpha original
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	} catch (e) {
		console.error('Color inválido:', color);
		return color;
	}
}


export function adjustLightness(color: string, percentage: number) {
	try {
		const [h, s, l, a] = parseToHsla(color);
		// Ajustar luminosidad: percentage puede ser positivo (aclarar) o negativo (oscurecer)
		// l está en rango 0-1, percentage es de -100 a +100
		const newL = Math.max(0, Math.min(1, l + (percentage / 100)));
		return hsla(h, s, newL, a);
	} catch (e) {
		console.error('Color inválido:', color);
		return color;
	}
}


export const _getDeviceTier = () : 'low' | 'medium' | 'high' => {
	if (Platform.OS !== 'android') return 'high'
  
	const ramGB = Device.totalMemory
	  ? Device.totalMemory / 1024 / 1024 / 1024
	  : 0
  
	if (ramGB > 0 && ramGB <= 4) return 'low'
	if (ramGB <= 6) return 'medium'
	return 'high'
}


export const createCtx = <T>() => {
    const context = reactCreateContext<T | null>(null)
    const useCtx = () => createUseContext(context)
    return [context.Provider, useCtx] as const
}


export const createUseContext = <T>(context: React.Context<T | null>) => {
    const ctx = useContext(context)
    if (!ctx) throw new Error('useContext debe usarse dentro de un context.Provider')
    return ctx as T
}


export const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}