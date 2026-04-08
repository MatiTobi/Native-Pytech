import { Text, TextProps } from "react-native"
import { memo } from "react"

import { useApp } from "react-native-pytech/Providers/App"




export default memo(({ children, fontScale, ...props } : { children: React.ReactNode, fontScale?: string } & TextProps) => {


    if (fontScale !== undefined) return <Text key={fontScale.toString()} {...props}>{children}</Text>

    const { fontScale: fontScaleApp } = useApp()
    return (
        <Text key={fontScaleApp.toString()} {...props}>
            {children}
        </Text>
    )
})
