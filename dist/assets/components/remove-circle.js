"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const react_1 = require("react");
const react_native_1 = require("react-native");
exports.default = (0, react_1.memo)(({ size = 30, color = constants_1.Colors.especiales.rojo, insideColor = 'white' }) => {
    const sizePixel = react_native_1.PixelRatio.roundToNearestPixel((21.5 / 30) * size);
    const withChild = react_native_1.PixelRatio.roundToNearestPixel((10.5 / 30) * size);
    const heightChild = react_native_1.PixelRatio.roundToNearestPixel((1.6 / 30) * size);
    return (<react_native_1.View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <react_native_1.View style={{
            width: sizePixel,
            height: sizePixel,
            borderRadius: 14,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                <react_native_1.View style={{
            width: withChild,
            height: heightChild,
            backgroundColor: insideColor,
            borderRadius: 100,
        }}/>
            </react_native_1.View>
        </react_native_1.View>);
});
