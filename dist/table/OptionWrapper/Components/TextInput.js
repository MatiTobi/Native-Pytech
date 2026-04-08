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
exports.selectAll = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../../../constants");
const App_1 = require("../../../providers/App");
const selectAll = (input, value) => {
    if (value === null)
        return;
    if (react_native_1.Platform.OS !== 'web')
        input.setSelection(0, value.toString().length);
    else
        input.select();
};
exports.selectAll = selectAll;
/**
    Pone el color del texto según el tema y agrega unos estilos para que ocupen todo el ancho.
*/
exports.default = (0, react_1.memo)(({ value, numberOfLines = 1, onFocus, onBlur, onChangeText, mask, ...props }) => {
    const { colorScheme } = (0, App_1.useApp)();
    const Theme = constants_1.Colors[colorScheme];
    const inputRef = (0, react_1.useRef)(null);
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const [rawValue, setRawValue] = (0, react_1.useState)(value);
    // Determinar el valor visual basado en el estado de foco
    const displayValue = rawValue == null ? null :
        isFocused || !mask
            ? rawValue.toString()
            : mask(rawValue);
    (0, react_1.useEffect)(() => {
        if (isFocused)
            (0, exports.selectAll)(inputRef.current, rawValue);
    }, [isFocused]);
    return (<react_native_1.TextInput style={[styles.textInput, { color: Theme.text }]} ref={inputRef} numberOfLines={numberOfLines} multiline={react_native_1.Platform.OS === 'android'} value={displayValue == null ? '' : displayValue} selectTextOnFocus={true} onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
        }} onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
        }} onChangeText={(text) => {
            setRawValue(text === '' ? null : text);
            onChangeText?.(text);
        }} clearButtonMode='while-editing' {...props}/>);
});
const styles = react_native_1.StyleSheet.create({
    textInput: {
        fontSize: 17,
        flex: 1,
        outlineStyle: 'none', // Le tuve que poner el "as any" porque no existe esta propiedad en dispositivos.
        textAlign: 'right',
    },
});
