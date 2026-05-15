import { StyleProp } from 'react-native';
import React from 'react';
declare const Utils: {
    addProps: (element: React.ReactElement | null, additionalStyles?: StyleProp<any>, extraProps?: Record<string, any>) => React.ReactElement | null;
    isValidMail: (mail: string) => boolean;
    applyOpacity: (color: string, opacity: number) => string;
    adjustLightness: (color: string, percentage: number) => string;
    _getDeviceTier: () => "low" | "medium" | "high";
    createCtx: <T>() => readonly [React.Provider<T>, () => T];
    createUseContext: <T>(context: React.Context<T | null>) => T;
};
export default Utils;
