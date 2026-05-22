import { StyleProp, TextStyle } from 'react-native';
import { ImperativeRouter } from 'expo-router';
declare const _default: import("react").MemoExoticComponent<({ text, onPress, renderItems, style }: {
    text?: string;
    onPress: ({ router }: {
        router: ImperativeRouter;
    }) => void;
    renderItems?: ({ pressed }: {
        pressed: boolean;
    }) => React.ReactNode;
    style?: StyleProp<TextStyle>;
}) => import("react").JSX.Element>;
export default _default;
