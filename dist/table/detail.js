import { memo } from "react";
import { Text } from "react-native";
import { useApp } from '../providers/app';
import Colors from "../constants/colors";
export default memo(({ text }) => {
    const { colorScheme } = useApp();
    const Theme = Colors[colorScheme];
    return (<Text style={{ color: Theme.text2Libretas, fontSize: 13, lineHeight: 16 }}>
            {text}
        </Text>);
});
