import React, { memo } from "react";
import { Text } from "react-native";
import colors from "../constants";
import { useApp } from "providers/app";
export default memo(({ text }) => {
    const { colorScheme } = useApp();
    const Theme = colors[colorScheme];
    return <Text style={{ color: Theme.text2, fontSize: 22 }}>{text}</Text>;
});
