"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLowTier = void 0;
const react_native_1 = require("react-native");
const defs_1 = require("./defs");
exports.isLowTier = react_native_1.Platform.OS === 'android' && (0, defs_1.getDeviceTier)() === 'low';
