"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const App_1 = require("../providers/App");
exports.default = (0, react_1.memo)(({ children, fontScale, ...props }) => {
    if (fontScale !== undefined)
        return <react_native_1.Text key={fontScale.toString()} {...props}>{children}</react_native_1.Text>;
    const { fontScale: fontScaleApp } = (0, App_1.useApp)();
    return (<react_native_1.Text key={fontScaleApp.toString()} {...props}>
            {children}
        </react_native_1.Text>);
});
