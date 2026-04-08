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
exports.useDelete = exports.useBorder = void 0;
const react_1 = __importStar(require("react"));
const Theme_1 = __importDefault(require("../../components/Theme"));
const Components_1 = require("./Components");
const Wrapper_1 = __importDefault(require("./Wrapper"));
var Borders_1 = require("./Wrapper/Contexts/Borders");
Object.defineProperty(exports, "useBorder", { enumerable: true, get: function () { return Borders_1.useBorder; } });
var context_1 = require("./Wrapper/Contexts/Delete/context");
Object.defineProperty(exports, "useDelete", { enumerable: true, get: function () { return context_1.useDelete; } });
const OptionWrapper = (0, react_1.memo)(({ ...props }) => {
    return <Theme_1.default component={Wrapper_1.default} {...props}/>;
});
OptionWrapper.Components = {
    DeleteIcon: Components_1.DeleteIcon,
    DragIcon: Components_1.DragIcon,
    Icon: Components_1.Icon,
    Image: Components_1.Image,
    Text: Components_1.Text,
    TextInput: Components_1.TextInput,
    TextInputCurrency: Components_1.TextInputCurrency,
    TextView: Components_1.TextView,
};
exports.default = OptionWrapper;
