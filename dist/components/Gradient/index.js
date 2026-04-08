"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const expo_linear_gradient_1 = require("expo-linear-gradient");
const constants_1 = require("./constants");
exports.default = (0, react_1.memo)(({ text, color, type = 'small' }) => {
    const cantLetras = text.length;
    if (!cantLetras)
        throw new Error('Text must be at least 1 character');
    if (cantLetras > 3)
        throw new Error('Text must be less than 3 characters');
    const typeSizes = (0, react_1.useMemo)(() => constants_1.sizes[type], [type]);
    const textComponent = (0, react_1.useMemo)(() => <react_native_1.Text style={[styles.text, { fontSize: typeSizes.fontSize[cantLetras] }]} allowFontScaling={false}>
            {text}
        </react_native_1.Text>, [text, cantLetras, typeSizes]);
    return (<expo_linear_gradient_1.LinearGradient style={[styles.gradient, { height: typeSizes.diameter, borderRadius: typeSizes.diameter }]} colors={[constants_1.colors[color].light, constants_1.colors[color].dark]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
            {textComponent}
        </expo_linear_gradient_1.LinearGradient>);
});
const styles = react_native_1.StyleSheet.create({
    gradient: {
        aspectRatio: 1, // width will automatically match height
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: -0.5,
    }
});
