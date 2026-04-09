import { memo } from "react";
import { Text } from "react-native";

import { useApp } from '../../../providers/app'
import colors from "../constants";



export default memo(({ text }: { text?: string }) => {

    const { colorScheme } = useApp()
    const Theme = colors.theme[colorScheme]

    return (
        <Text style={{color: Theme.text2Libretas, fontSize: 13, lineHeight: 16}}>
            {text}
        </Text>
    )
})