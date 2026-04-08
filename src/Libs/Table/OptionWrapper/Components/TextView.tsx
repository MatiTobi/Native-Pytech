import React, { memo, useMemo } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle, ViewProps } from 'react-native'
import Text from './Text'


type TextType = (React.ReactElement<typeof Text>)

type Props = {
    children: TextType | TextType[] | React.ReactNode
    style?: StyleProp<ViewStyle>
    isSingleLine?: boolean
}
/**
    Pone el padding según el typeOption.
*/
export default memo(({ children, style = {}, isSingleLine, ...props } : Props & ViewProps) => {

    isSingleLine = useMemo(() => isSingleLine ?? (React.Children.count(children) <= 1), [children])
    const containerStyle = useMemo(() => [styles.container, { paddingVertical: isSingleLine ? 16.35 : 10 }, style], [isSingleLine, style])

    return (
        <View style={containerStyle} {...props}>
            {children}
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 2,
    }
})
