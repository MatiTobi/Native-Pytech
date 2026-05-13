import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Utils from '../../../../../libs/constants/utils';
export default memo(({ backgroundColorPage }) => {
    const c06 = Utils.applyOpacity(backgroundColorPage, 0.6);
    const c08 = Utils.applyOpacity(backgroundColorPage, 0.8);
    const c09 = Utils.applyOpacity(backgroundColorPage, 0.9);
    return (<MaskedView style={[StyleSheet.absoluteFillObject]} maskElement={<LinearGradient colors={[
                'transparent',
                c06,
                c08,
                c09,
                c09
            ]} start={{ x: 0.5, y: 0 }} // arriba-centro
         end={{ x: 0.5, y: 1 }} // abajo-centro
         style={[StyleSheet.absoluteFillObject]}/>}>
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: backgroundColorPage }]}></View>
            </MaskedView>);
});
