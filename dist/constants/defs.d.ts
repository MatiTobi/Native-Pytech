import { StyleProp } from 'react-native';
import React from 'react';
export declare const addProps: (element: React.ReactElement | null, additionalStyles?: StyleProp<any>, extraProps?: Record<string, any>) => React.ReactElement | null;
export declare const numberFormat: (value: number) => string;
export declare function useEffectWithoutFirstRender(effect: () => void, deps: any[]): void;
export declare function useLayoutEffectWithoutFirstRender(effect: () => void, deps: any[]): void;
export declare const getDeviceTier: () => "low" | "medium" | "high";
