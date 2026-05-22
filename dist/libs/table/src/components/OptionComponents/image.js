import React, { memo } from 'react';
import { Image } from 'react-native';
import colors from '../../constants';
import { useApp } from '../../../../../libs/providers/App';
/**
    Pone el tintColor según el tema.
*/
export default memo(({ source }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    return (<Image source={source} style={{ width: 12.1, height: 12.1 }} tintColor={Theme.icon}/>);
});
