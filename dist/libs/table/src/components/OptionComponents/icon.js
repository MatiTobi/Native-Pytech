import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import colors from '../../constants';
import { useApp } from 'libs/providers/App';
/**
    Pone el color según el tema.
*/
export default memo(({ name, size = 30 }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    return (<Ionicons name={name} size={size} color={Theme.icon}/>);
});
