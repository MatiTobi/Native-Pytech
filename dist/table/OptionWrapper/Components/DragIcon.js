import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
//import { useDrag } from 'react-native-pytech/Libs/ReorderableList'
import { Colors } from '../../../constants';
import { useApp } from '../../../providers/App';
/**
    Icono de drag.
*/
export default memo(() => {
    const { colorScheme } = useApp();
    const Theme = Colors[colorScheme];
    //const pressableProps = useDrag() as unknown as PressableProps
    const pressableProps = {};
    return (<Pressable {...pressableProps}>
			<Ionicons name='menu-outline' size={28} color={Theme.borderColorContCliente}/>
		</Pressable>);
});
