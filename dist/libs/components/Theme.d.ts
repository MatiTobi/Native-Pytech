import React from 'react';
import { type ColorSchemeType } from '../../libs/constants/colors';
type WithColorScheme = {
    colorScheme: ColorSchemeType;
};
declare const _default: <P extends object>({ component, ...props }: {
    component: React.ComponentType<P & WithColorScheme>;
} & Partial<WithColorScheme> & P) => React.JSX.Element;
export default _default;
