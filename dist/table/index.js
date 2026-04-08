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
exports.deviceTier = exports.useBorder = exports.useDelete = exports.useTable = exports.useStore = exports.useBorders = void 0;
const react_1 = require("@legendapp/state/react");
const Device = __importStar(require("expo-device"));
const react_2 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const constants_1 = require("../constants");
const App_1 = require("../providers/App");
const context_1 = require("./context");
const OptionWrapper_1 = __importDefault(require("./OptionWrapper"));
var context_2 = require("./context");
Object.defineProperty(exports, "useBorders", { enumerable: true, get: function () { return context_2.useBorders; } });
Object.defineProperty(exports, "useStore", { enumerable: true, get: function () { return context_2.useStore; } });
Object.defineProperty(exports, "useTable", { enumerable: true, get: function () { return context_2.useTable; } });
var OptionWrapper_2 = require("./OptionWrapper");
Object.defineProperty(exports, "useDelete", { enumerable: true, get: function () { return OptionWrapper_2.useDelete; } });
Object.defineProperty(exports, "useBorder", { enumerable: true, get: function () { return OptionWrapper_2.useBorder; } });
const Table = (0, react_2.memo)(({ children, subtitulo, itemDetalle, colorThemeType = 'default', type = 'default', styleTable, styleTableView, allBorders = false, keys, }) => {
    const store = (0, react_1.useObservable)({
        pressed_id: null,
        deleted: {
            setted: false,
            id: null,
            keys: keys,
            lastId: (() => {
                const newKeys = store.deleted.keys.get();
                return (newKeys?.[newKeys.length - 1] ?? null);
            }),
            firstId: (() => {
                const newKeys = store.deleted.keys.get();
                return (newKeys?.[0] ?? null);
            }),
        },
        borders: new Map()
    });
    const isFirstRender = (0, react_2.useRef)(true);
    (0, react_2.useEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        store.deleted.keys.set(keys);
    }, [keys]);
    const { colorScheme } = (0, App_1.useApp)();
    const Theme = constants_1.Colors[colorScheme];
    // Le agrega estilos y props a itemDetalle (Tiene que ser un Text)
    const newItemDetalle = itemDetalle ?
        (0, constants_1.addProps)(itemDetalle, [styles.contTable_Text_2, { color: Theme.text2Libretas }], {
            entering: react_native_reanimated_1.FadeIn.duration(100),
            exiting: react_native_reanimated_1.FadeOut.duration(100),
        })
        : null;
    const layoutAnimation = react_native_1.Platform.OS === 'android' && exports.deviceTier === 'low' ?
        react_native_reanimated_1.LinearTransition.duration(500) : react_native_reanimated_1.LinearTransition.easing(react_native_reanimated_1.Easing.bezier(0.2, 0.2, 0, 1)).duration(600);
    return (<react_native_reanimated_1.default.View style={[
            styles.contTable,
            type === 'default' ? { marginRight: 16, marginLeft: 16, marginBottom: newItemDetalle ? 20 : 30 } : {},
            styleTable
        ]} key={subtitulo} layout={react_native_1.Platform.OS === 'web' ? undefined : react_native_reanimated_1.LinearTransition.duration(100).easing(react_native_reanimated_1.Easing.bezier(0.1, 0.1, 0, 1))}>

            {subtitulo && <react_native_reanimated_1.default.Text key={subtitulo} style={[styles.contTable_Text, { color: Theme.text2Libretas }]} exiting={react_native_reanimated_1.FadeOut.duration(100)} entering={react_native_reanimated_1.FadeIn.duration(100)}>{subtitulo}</react_native_reanimated_1.default.Text>}

            <react_native_reanimated_1.default.View style={[
            styles.contTable_View,
            { backgroundColor: constants_1.Colors.table[colorThemeType][colorScheme].background },
            styleTableView,
            type === 'default' ? { borderRadius: 26 } : {},
        ]} exiting={react_native_reanimated_1.FadeOut.duration(100)} entering={react_native_reanimated_1.FadeIn.duration(100)} layout={layoutAnimation}>
                
                <context_1.TableContext.Provider value={{ colorThemeType, type, keys, deviceTier: exports.deviceTier, allBorders }}>
                    <context_1.StoreContext.Provider value={store}>
                        <context_1.BordersContext.Provider value={store.borders}>
                            {children}
                        </context_1.BordersContext.Provider>
                    </context_1.StoreContext.Provider>
                </context_1.TableContext.Provider>

                {/*<View style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: 'red', height: 1}} />*/}

            </react_native_reanimated_1.default.View>

            {newItemDetalle}
        </react_native_reanimated_1.default.View>);
});
const styles = react_native_1.StyleSheet.create({
    contTable: {
        gap: 6,
    },
    contTable_Text: {
        marginLeft: 16,
        fontSize: 17,
        fontWeight: '600',
    },
    contTable_Text_2: {
        marginTop: 1.5,
        marginLeft: 15,
        fontSize: 13,
        marginRight: 16,
        lineHeight: 16
    },
    contTable_View: {
        overflow: 'hidden',
        position: 'relative',
    }
});
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
exports.deviceTier = getDeviceTier();
Table.Option = OptionWrapper_1.default;
exports.default = Table;
