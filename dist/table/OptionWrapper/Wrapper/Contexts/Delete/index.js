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
const state_1 = require("@legendapp/state");
const react_1 = require("@legendapp/state/react");
const react_2 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const constants_1 = require("../../../../../constants");
const context_1 = require("../../../../context");
const context_2 = require("./context");
const anim = {
    duration: 600,
    easing: react_native_1.Easing.bezier(0.2, 0.2, 0, 1),
    useNativeDriver: true,
};
exports.default = (0, react_2.memo)(({ children, ...props }) => {
    const [deleted, setDeleted] = (0, react_2.useState)(false);
    if (deleted)
        return null;
    return <Component {...props} setDeleted={setDeleted}>{children}</Component>;
});
const Component = (0, react_2.memo)(({ children, id, removeWidth, onDelete, onDeleteShown, setDeleted, }) => {
    const { deviceTier } = (0, context_1.useTable)();
    const store = (0, context_1.useStore)();
    const is_deleted = (0, react_1.useSelector)(() => store.deleted.id.get() === id);
    (0, constants_1.useLayoutEffectWithoutFirstRender)(() => {
        if (is_deleted)
            return;
        onDeleteShown?.(id, false);
        removeStateValue.stopAnimation();
        react_native_1.Animated.timing(removeStateValue, { toValue: 0, ...anim }).start();
    }, [is_deleted]);
    const removeStateValue = (0, react_2.useRef)(new react_native_1.Animated.Value(0)).current;
    const [widthRemove, setWidthRemove] = (0, react_2.useState)(removeWidth ? removeWidth + (12 * 2) : 0);
    const animatedRemoveStyle = {
        opacity: removeStateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        }),
        transform: [
            {
                translateX: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-widthRemove, 0]
                })
            },
            {
                scale: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
            }
        ]
    };
    const animatedStyle = {
        transform: [{
                translateX: removeStateValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -widthRemove]
                })
            }]
    };
    const onLayputProps = removeWidth ? {} : { onLayout: (e) => setWidthRemove(e.nativeEvent.layout.width) };
    const styleWidthRemove = removeWidth ? { width: removeWidth } : {};
    // Función que los children pueden llamar para iniciar el delete
    const startDelete = (0, react_2.useCallback)(() => {
        if (store.deleted.setted.peek())
            return;
        store.deleted.id.set(id);
        removeStateValue.stopAnimation();
        react_native_1.Animated.timing(removeStateValue, { toValue: 1, ...anim }).start();
        onDeleteShown?.(id, true);
    }, []);
    const exitingAnimation = react_native_1.Platform.OS === 'android' && deviceTier === 'low' ?
        react_native_reanimated_1.SlideOutLeft.duration(200) : react_native_reanimated_1.SlideOutLeft.easing(react_native_reanimated_1.Easing.bezier(0.2, 0.2, 0, 1)).duration(300);
    // Valor del contexto
    const contextValue = (0, react_2.useMemo)(() => startDelete, [startDelete]);
    const start = (0, react_2.useCallback)(() => {
        if (store.deleted.id.peek() === null)
            return;
        store.deleted.setted.set(true);
        store.deleted.id.set(null);
    }, []);
    const end = (0, react_2.useCallback)(() => { store.deleted.setted.set(false); }, []);
    const viewProps = (0, react_2.useMemo)(() => (react_native_1.Platform.OS === 'web' ?
        {
            onPointerDown: start,
            onPointerUp: end,
        } : {
        onTouchStart: start,
        onTouchEnd: end,
    }), []);
    return (<>
        <react_native_1.Pressable style={[styles.pressableRemove]} {...onLayputProps} onPress={() => {
            removeStateValue.stopAnimation();
            setDeleted(true);
            onDelete?.(id);
            const oldKeys = store.deleted.keys.peek();
            const newKeys = oldKeys?.filter((key) => key !== id);
            (0, state_1.batch)(() => {
                store.deleted.keys.set(newKeys);
                store.deleted.id.set(null);
            });
        }}>
            <react_native_1.Animated.View style={[animatedRemoveStyle, styles.containerRemove, styleWidthRemove]}>
                <react_native_1.Text style={styles.text}>Eliminar</react_native_1.Text>
            </react_native_1.Animated.View>
        </react_native_1.Pressable>

        <react_native_1.Animated.View style={[{ position: 'relative' }, animatedStyle]}>
            <react_native_reanimated_1.default.View exiting={exitingAnimation}>
                <react_native_1.View {...viewProps}>
                    <context_2.DeleteContext.Provider value={contextValue}>
                        {children}
                    </context_2.DeleteContext.Provider>
                </react_native_1.View>
            </react_native_reanimated_1.default.View>
        </react_native_1.Animated.View>
    </>);
}, (prev, next) => prev.id === next.id);
const styles = react_native_1.StyleSheet.create({
    pressableRemove: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1
    },
    containerRemove: {
        paddingHorizontal: 12,
        backgroundColor: constants_1.Colors.especiales.rojo,
        margin: 6,
        marginHorizontal: 10,
        flex: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        color: 'white'
    }
});
