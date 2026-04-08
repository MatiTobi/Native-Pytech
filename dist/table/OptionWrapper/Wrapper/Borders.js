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
const react_1 = require("@legendapp/state/react");
const react_2 = __importStar(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../../../constants");
const App_1 = require("../../../providers/App");
const context_1 = require("../../context");
const Borders_1 = require("./Contexts/Borders");
const Option_1 = require("./Option");
const heightPixel = react_native_1.PixelRatio.roundToNearestPixel(1);
exports.default = (0, react_2.memo)(({ id, borders }) => {
    if (borders.color)
        return <Component id={id} borders={borders}/>;
    const { colorScheme } = (0, App_1.useApp)();
    const { colorThemeType } = (0, context_1.useTable)();
    borders.color = constants_1.Colors.table[colorThemeType][colorScheme].border;
    return <Component id={id} borders={borders}/>;
});
const Component = (0, react_2.memo)(({ id, borders }) => {
    const shownTop = borders?.shownTop;
    const shownBottom = borders?.shownBottom;
    const justTop = shownTop === true && shownBottom === false;
    const justBottom = shownTop === false && shownBottom === true;
    const styleSpaces = { left: borders?.left ?? Option_1.left, right: borders?.right ?? Option_1.right };
    //Si solo hay 1 border y ambos estan predefinidos...
    if (justTop || justBottom) {
        //Version super light
        const style = justTop ? { bottom: null } : { top: null }; //Cancela el bottom o el top de styles.space
        return <react_native_1.View style={[styles.space, styles.border, styleSpaces, style, { backgroundColor: borders.color }]}/>;
    }
    return (<react_native_1.View style={[styles.space, styleSpaces]}>
            {shownTop == null ?
            <BorderExtended isTop={true} id={id} color={borders.color}/> :
            <Border show={borders.shownTop} color={borders.color}/>}
            {shownBottom == null ?
            <BorderExtended isTop={false} id={id} color={borders.color}/> :
            <Border show={borders.shownBottom} color={borders.color}/>}
        </react_native_1.View>);
});
const BorderExtended = (0, react_2.memo)(({ isTop, id, color }) => {
    const { keys, allBorders } = (0, context_1.useTable)();
    const store = (0, context_1.useStore)();
    const hasKeys = keys && keys.length > 0;
    const showStore = (0, react_1.useValue)(() => {
        if (isTop) {
            const isFirstId = store.deleted.firstId.get() === id;
            return allBorders ? (hasKeys ? isFirstId : false) : !hasKeys;
        }
        else {
            const isLastId = store.deleted.lastId.get() === id;
            return allBorders ? true : (hasKeys ? !isLastId : false);
        }
    });
    const [Show, setShow] = (0, react_2.useState)(showStore);
    const bordersRef = (0, Borders_1.useBorder)();
    (0, react_2.useEffect)(() => {
        if (isTop)
            bordersRef.current.top = setShow;
        else
            bordersRef.current.bottom = setShow;
    }, []);
    (0, constants_1.useEffectWithoutFirstRender)(() => {
        setShow(showStore);
    }, [showStore]);
    return <Border show={Show} color={color}/>;
});
const Border = (0, react_2.memo)(({ show, color }) => {
    return <react_native_1.View style={[styles.border, { backgroundColor: show ? color : 'transparent' }]}/>;
});
const styles = react_native_1.StyleSheet.create({
    space: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'column',
        left: Option_1.left,
        right: Option_1.right,
        bottom: 0,
        top: -heightPixel
    },
    border: {
        height: heightPixel,
    }
});
