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
exports.right = exports.left = void 0;
const expo_linear_gradient_1 = require("expo-linear-gradient");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../../../constants");
const __1 = __importDefault(require("../.."));
const context_1 = require("../../context");
exports.left = 16;
exports.right = 16;
const flattenChildren = (children) => {
    return react_1.default.Children.toArray(children).flatMap((child) => {
        if (react_1.default.isValidElement(child) && child.type === react_1.default.Fragment) {
            const props = child.props;
            return flattenChildren(props.children);
        }
        return [child];
    });
};
const AddTextView = (0, react_1.memo)(({ children, hasTextView }) => {
    const hasTextView_ = hasTextView ?? flattenChildren(children).some((child) => react_1.default.isValidElement(child) && child.type === __1.default.Option.Components.TextView);
    const childrenLeft = <react_native_1.View style={styles.izq}>{children}</react_native_1.View>;
    if (hasTextView_)
        return childrenLeft;
    return (<__1.default.Option.Components.TextView>
            {childrenLeft}
        </__1.default.Option.Components.TextView>);
});
exports.default = (0, react_1.memo)(({ children, childrenLeft, childrenRight, onPress, style, backgroundColorPressed, LinearGradientProps, colorScheme, hasTextView, }) => {
    // Component
    const content = <>
        {childrenLeft && <AddTextView hasTextView={hasTextView}>{childrenLeft}</AddTextView>}
        {childrenRight && <react_native_1.View style={styles.der}>{childrenRight}</react_native_1.View>}
        {children}
    </>;
    const styleView = (0, react_1.useMemo)(() => [styles.Item_View, style], [style]);
    const childrenOption = onPress === undefined ? <react_native_1.View style={styleView}>{content}</react_native_1.View>
        : (backgroundColorPressed ? (<react_native_1.Pressable onPress={onPress} style={({ pressed }) => !pressed ? styleView : [styleView, { backgroundColor: backgroundColorPressed }]}>
                {content}
            </react_native_1.Pressable>) : (<PressableView onPress={onPress} colorScheme={colorScheme} styleView={styleView}>
                {content}
            </PressableView>));
    return (LinearGradientProps ?
        <expo_linear_gradient_1.LinearGradient {...LinearGradientProps}>
                {childrenOption}
            </expo_linear_gradient_1.LinearGradient>
        : childrenOption);
});
const PressableView = (0, react_1.memo)(({ children, onPress, colorScheme, styleView }) => {
    const { colorThemeType } = (0, context_1.useTable)();
    return (<react_native_1.Pressable onPress={onPress} style={({ pressed }) => !pressed ? styleView : [styleView, { backgroundColor: constants_1.Colors.table[colorThemeType][colorScheme].background_pressed }]}>
            {children}
        </react_native_1.Pressable>);
});
/*
 const pressableChildren = useCallback(({ pressed }: { pressed: boolean }) => (
        <>
            {!pressed ?
                <NotPressedView /> :
                <OnPressView backgroundColorPressed={backgroundColorPressed} colorScheme={colorScheme} />
            }
            {content}
        </>
    ), [backgroundColorPressed, content, colorScheme])

const NotPressedView = memo(() => <View style={styles.onPressView} />)
const OnPressView = memo(({ backgroundColorPressed, colorScheme }: { backgroundColorPressed: OptionProps['backgroundColorPressed'], colorScheme: ColorSchemeType }) => {
    const { colorThemeType } = useTable()
    return <View style={[styles.onPressView, { backgroundColor: backgroundColorPressed ? backgroundColorPressed : Colors.table[colorThemeType][colorScheme].background_pressed }]} />

})
*/
//(20.3 - 0.5) / 2 = 9.9
//const paddingVertical = (24.1 - paddingTopItem - gap) / 2
//console.log('paddingVertical', paddingVertical)
const styles = react_native_1.StyleSheet.create({
    Item_View: {
        flex: 1,
        paddingLeft: exports.left,
        paddingRight: exports.right,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    izq: {
        marginRight: 'auto',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 11,
        //paddingBottom: 2,
    },
    der: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 11
    },
    onPressView: {
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent'
    }
});
