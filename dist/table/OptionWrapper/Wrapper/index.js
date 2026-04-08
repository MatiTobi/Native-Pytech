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
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_1 = require("react-native");
const react_1 = __importStar(require("react"));
const constants_1 = require("../../../constants");
const __1 = require("../..");
const context_1 = require("../../context");
const Delete_1 = __importDefault(require("./Contexts/Delete"));
const Borders_1 = __importDefault(require("./Contexts/Borders"));
const Borders_2 = __importDefault(require("./Borders"));
const Option_1 = __importStar(require("./Option"));
const ViewDelete = (0, react_1.memo)(({ children, colorScheme, ...props }) => {
    const { colorThemeType } = (0, context_1.useTable)();
    return (<react_native_1.View style={{ backgroundColor: constants_1.Colors.table[colorThemeType][colorScheme].background }} {...props}>
            {children}
        </react_native_1.View>);
});
exports.default = (0, react_1.memo)(({ children, childrenLeft, childrenRight, onPress, onDelete, onDeleteShown, removeWidth, id, style, isAnimated = true, borders = {
    left: Option_1.left,
    right: Option_1.right,
    shownTop: null,
    shownBottom: null,
    color: null
}, backgroundColorPressed, LinearGradientProps, layoutAnimation = react_native_1.Platform.OS === 'android' && __1.deviceTier === 'low' ?
    react_native_reanimated_1.LinearTransition.duration(500) : react_native_reanimated_1.LinearTransition.easing(react_native_reanimated_1.Easing.bezier(0.2, 0.2, 0, 1)).duration(600), colorScheme, hasTextView, ...props }) => {
    //console.log('OptionWrapper', id)
    // Restricciones
    if (onDelete && onPress)
        throw new Error('onDelete y onPress no pueden ser usados juntos');
    let content = (<>
        <Option_1.default colorScheme={colorScheme} hasTextView={hasTextView} childrenLeft={childrenLeft} childrenRight={childrenRight} onPress={onPress} style={style} backgroundColorPressed={backgroundColorPressed} LinearGradientProps={LinearGradientProps}>
            {children}
        </Option_1.default>
        {borders && <Borders_2.default id={id} borders={borders}/>}
    </>);
    // onDelete
    content = onDelete ? (<Delete_1.default id={id} removeWidth={removeWidth} onDelete={onDelete} onDeleteShown={onDeleteShown}>
            <ViewDelete colorScheme={colorScheme} {...props}>
                {content}
            </ViewDelete>
        </Delete_1.default>) : (props ? <react_native_1.View {...props}>{content}</react_native_1.View> : content);
    // Borders
    content = borders && (borders?.shownTop == null || borders?.shownBottom == null) ? (<Borders_1.default>
            {content}
        </Borders_1.default>) : content;
    if (!isAnimated)
        return content;
    return (<react_native_reanimated_1.default.View layout={layoutAnimation} exiting={react_native_reanimated_1.FadeOut.duration(100)} entering={react_native_reanimated_1.FadeIn.duration(100)}>
            {content}
        </react_native_reanimated_1.default.View>);
});
