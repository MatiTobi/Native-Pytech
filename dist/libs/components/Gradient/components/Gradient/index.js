import { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import colors, { sizes } from '../../constants';
export default memo(({ text, color = 'default', type = 'small', icon, ionIconName, sizeDiameter }) => {
    const typeSizes = useMemo(() => {
        if (!sizeDiameter)
            return sizes[type];
        return {
            diameter: sizeDiameter,
            fontSize: {
                1: sizeDiameter * 0.53,
                2: sizeDiameter * 0.48,
                3: sizeDiameter * 0.43
            }
        };
    }, [type]);
    const iconSize = typeSizes.diameter * 0.5;
    const textComponent = useMemo(() => {
        const cantLetras = text?.length;
        if (!text || !cantLetras)
            return null;
        if (cantLetras > 3)
            throw new Error('Text must be less than 3 characters');
        return (<Text style={[styles.text, { fontSize: typeSizes.fontSize[cantLetras] }]} allowFontScaling={false}>
                {text}
            </Text>);
    }, [text, typeSizes]);
    return (<View style={[styles.view, { height: typeSizes.diameter, borderRadius: typeSizes.diameter }]}>
            <LinearGradient style={[styles.view, styles.gradient, { height: typeSizes.diameter, borderRadius: typeSizes.diameter }]} colors={[colors[color].light, colors[color].dark]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}/>
            {textComponent ?? (icon ?? (ionIconName && <Ionicons name={ionIconName} size={iconSize} color={'white'}/>))}
        </View>);
});
const styles = StyleSheet.create({
    view: {
        aspectRatio: 1, // width will automatically match height
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        position: 'absolute',
        transform: [{ rotate: '90deg' }],
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        userSelect: 'none',
        letterSpacing: -0.5,
    }
});
