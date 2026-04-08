"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App_1 = require("../providers/App");
exports.default = ({ component, ...props }) => {
    const Component = component;
    if (props.colorScheme !== undefined) {
        return <Component {...props} colorScheme={props.colorScheme}/>;
    }
    const { colorScheme } = (0, App_1.useApp)();
    return <Component {...props} colorScheme={colorScheme}/>;
};
