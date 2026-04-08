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
const vector_icons_1 = require("@expo/vector-icons");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
//import { useDrag } from 'react-native-pytech/Libs/ReorderableList'
const constants_1 = require("../../../constants");
const App_1 = require("../../../providers/App");
/**
    Icono de drag.
*/
exports.default = (0, react_1.memo)(() => {
    const { colorScheme } = (0, App_1.useApp)();
    const Theme = constants_1.Colors[colorScheme];
    //const pressableProps = useDrag() as unknown as PressableProps
    const pressableProps = {};
    return (<react_native_1.Pressable {...pressableProps}>
			<vector_icons_1.Ionicons name='menu-outline' size={28} color={Theme.borderColorContCliente}/>
		</react_native_1.Pressable>);
});
