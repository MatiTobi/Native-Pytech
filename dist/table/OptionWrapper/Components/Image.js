import React, { memo } from 'react';
import { Image } from 'react-native';
import Colors from '../../../constants/colors';
import { useApp } from '../../../providers/app';
/**
    Pone el tintColor según el tema.
*/
export default memo(({ source }) => {
    const { colorScheme } = useApp();
    const Theme = Colors[colorScheme];
    return (<Image source={source} style={{ width: 12.1, height: 12.1 }} tintColor={Theme.flecha}/>);
});
