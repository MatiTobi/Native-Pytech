import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
/**
    Pone el padding según el typeOption.
*/
export default memo(({ children, style = {}, isSingleLine, ...props }) => {
    isSingleLine = useMemo(() => isSingleLine ?? (React.Children.count(children) <= 1), [children]);
    const containerStyle = useMemo(() => [styles.container, { paddingVertical: isSingleLine ? 16.35 : 10 }, style], [isSingleLine, style]);
    return (<View style={containerStyle} {...props}>
            {children}
        </View>);
});
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 2,
    }
});
