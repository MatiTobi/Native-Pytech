import { memo } from "react";
import { Text } from "react-native";
import { useApp } from 'libs/providers/App';
import colors from "../constants";
export default memo(({ text }) => {
    const { colorScheme } = useApp();
    const Theme = colors.theme[colorScheme];
    return (<Text style={{ color: Theme.text2, fontSize: 13, lineHeight: 16 }}>
            {text}
        </Text>);
});
