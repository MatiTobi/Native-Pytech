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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../../../constants");
const Text_1 = __importDefault(require("../../../components/Text$"));
const Theme_1 = __importDefault(require("../../../components/Theme"));
exports.default = (0, react_1.memo)(({ ...props }) => {
    return <Theme_1.default component={Component} {...props}/>;
});
const Component = (0, react_1.memo)(({ texto, enabled = true, style = {}, colorScheme, fontScale, ...props }) => {
    const Theme = constants_1.Colors[colorScheme]; // Con el ! estamos diciendo que colorScheme es obligatorio (que será)
    const textStyle = (0, react_1.useMemo)(() => [styles.text, { color: enabled ? Theme.text : Theme.text2Libretas }, style], [enabled, Theme, style]);
    return (<Text_1.default fontScale={fontScale} style={textStyle} {...props}>
            {texto}
        </Text_1.default>);
});
const styles = react_native_1.StyleSheet.create({
    text: {
        fontSize: 17,
    }
});
