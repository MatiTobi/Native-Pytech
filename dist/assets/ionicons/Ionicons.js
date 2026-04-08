"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ionicons = void 0;
const ionicons_1 = require("assets/ionicons");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
const Ionicons = ({ name, color, size = 12, y = 0, x = 0 }) => {
    const paths = ionicons_1._icons[name];
    if (!paths)
        throw new Error(`El icono "${name}" no existe`);
    const scale = size / 512;
    if (y)
        y -= react_native_1.PixelRatio.roundToNearestPixel(size / 2);
    return (<react_native_svg_1.G y={y || undefined} x={x || undefined} scale={scale} color={color}>
            {paths}
        </react_native_svg_1.G>);
};
exports.Ionicons = Ionicons;
exports.default = exports.Ionicons;
