import { MeshGradientView } from 'expo-mesh-gradient';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { applyOpacity } from 'constants/utils';
export default memo(({ backgroundColorPage }) => {
    const c06 = applyOpacity(backgroundColorPage, 0.6);
    const c08 = applyOpacity(backgroundColorPage, 0.8);
    const c09 = applyOpacity(backgroundColorPage, 0.9);
    return (<MeshGradientView style={[StyleSheet.absoluteFillObject]} columns={2} rows={5} colors={[
            'transparent', 'transparent',
            c06, c06,
            c08, c08,
            c09, c09,
            c09, c09
        ]} points={[
            [0.0, 0.0], [1.0, 0.0],
            [0.0, 0.25], [1.0, 0.25],
            [0.0, 0.5], [1.0, 0.5],
            [0.0, 0.75], [1.0, 0.75],
            [0.0, 1.0], [1.0, 1.0],
        ]}/>);
});
