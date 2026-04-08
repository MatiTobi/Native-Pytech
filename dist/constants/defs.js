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
exports.getDeviceTier = exports.numberFormat = exports.addProps = void 0;
exports.useEffectWithoutFirstRender = useEffectWithoutFirstRender;
exports.useLayoutEffectWithoutFirstRender = useLayoutEffectWithoutFirstRender;
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const Device = __importStar(require("expo-device"));
const addProps = (element, additionalStyles = [], extraProps = {}) => {
    if (!react_1.default.isValidElement(element))
        return null;
    return react_1.default.cloneElement(element, {
        style: [
            element.props.style,
            ...additionalStyles
        ],
        ...extraProps
    });
};
exports.addProps = addProps;
const formatter = new Intl.NumberFormat('es-AR');
const numberFormat = (value) => {
    const abs = formatter.format(Math.abs(value));
    return value < 0 ? `(${abs})` : abs;
};
exports.numberFormat = numberFormat;
function useEffectWithoutFirstRender(effect, deps) {
    const isFirstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
}
function useLayoutEffectWithoutFirstRender(effect, deps) {
    const isFirstRender = (0, react_1.useRef)(true);
    (0, react_1.useLayoutEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        return effect();
    }, deps);
}
const getDeviceTier = () => {
    if (react_native_1.Platform.OS !== 'android')
        return 'high';
    const ramGB = Device.totalMemory
        ? Device.totalMemory / 1024 / 1024 / 1024
        : 0;
    if (ramGB > 0 && ramGB <= 4)
        return 'low';
    if (ramGB <= 6)
        return 'medium';
    return 'high';
};
exports.getDeviceTier = getDeviceTier;
