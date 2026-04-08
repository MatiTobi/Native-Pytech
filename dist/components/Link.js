"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const expo_router_1 = require("expo-router");
exports.default = (0, react_1.memo)(({ text = 'Inicia sesión', onPress, renderItems = ({ pressed }) => null, style }) => {
    const router = (0, expo_router_1.useRouter)();
    return (<react_native_1.Pressable onPress={() => onPress({ router })}>
            {({ pressed }) => (<react_native_1.View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <react_native_1.Text style={[styles.text, style, pressed && { textDecorationLine: 'underline' }]}>
                        {text}
                    </react_native_1.Text>
                    {renderItems({ pressed })}
                </react_native_1.View>)}
        </react_native_1.Pressable>);
});
const styles = react_native_1.StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'hsl(207, 100%, 50%)',
    },
});
