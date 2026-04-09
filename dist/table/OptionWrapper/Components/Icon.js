import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import Colors from '../../../constants/colors';
import { useApp } from '../../../providers/app';
/**
    Pone el color según el tema.
*/
export default memo(({ name, size = 30 }) => {
    const { colorScheme } = useApp();
    const Theme = Colors[colorScheme];
    return (<Ionicons name={name} size={size} color={Theme.flecha}/>);
});
