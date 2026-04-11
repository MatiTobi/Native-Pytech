import { StyleProp } from 'react-native';
import React from 'react';
export declare const addProps: (element: React.ReactElement | null, additionalStyles?: StyleProp<any>, extraProps?: Record<string, any>) => React.ReactElement | null;
export declare const numberFormat: (value: number) => string;
export declare function applyOpacity(color: string, opacity: number): string;
export declare function adjustLightness(color: string, percentage: number): string;
export declare const getDeviceTier: () => "low" | "medium" | "high";
export declare const createCtx: <T>() => readonly [React.Provider<T>, () => T];
export declare const createUseContext: <T>(context: React.Context<T | null>) => T;
