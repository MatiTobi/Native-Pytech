import { Colors } from '../../constants';
import { memo } from 'react';
import { PixelRatio, View } from 'react-native';
export default memo(({ size = 30, color = Colors.especiales.rojo, insideColor = 'white' }) => {
    const sizePixel = PixelRatio.roundToNearestPixel((21.5 / 30) * size);
    const withChild = PixelRatio.roundToNearestPixel((10.5 / 30) * size);
    const heightChild = PixelRatio.roundToNearestPixel((1.6 / 30) * size);
    return (<View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{
            width: sizePixel,
            height: sizePixel,
            borderRadius: 14,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                <View style={{
            width: withChild,
            height: heightChild,
            backgroundColor: insideColor,
            borderRadius: 100,
        }}/>
            </View>
        </View>);
});
