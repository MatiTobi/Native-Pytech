import Colors from '../../constants/colors';
import { memo } from 'react';
import { PixelRatio, View } from 'react-native';
export default memo(({ size = 30, color = Colors.table.default.dark.border }) => {
    const widthChild = PixelRatio.roundToNearestPixel((21 / 30) * size);
    const heightChild = PixelRatio.roundToNearestPixel((1.7 / 30) * size);
    const gap = PixelRatio.roundToNearestPixel((3.25 / 30) * size);
    return (<View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ gap: gap, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: widthChild, height: heightChild, backgroundColor: color }}/>
                <View style={{ width: widthChild, height: heightChild, backgroundColor: color }}/>
                <View style={{ width: widthChild, height: heightChild, backgroundColor: color }}/>
            </View>
        </View>);
});
