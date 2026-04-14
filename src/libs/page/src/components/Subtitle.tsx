import React, { memo } from "react"
import { Text } from "react-native"

import colors from "../constants"
import { useApp } from "libs/providers/App"



export default memo(({ text }: { text : string }) => {

    const { colorScheme } = useApp()
    const Theme = colors[colorScheme]
    
    return <Text style={{color: Theme.text2, fontSize: 22}}>{text}</Text>
})
