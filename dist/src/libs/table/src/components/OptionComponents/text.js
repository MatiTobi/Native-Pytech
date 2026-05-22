import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../constants';
import Text$ from '@/libs/components/Text';
import ThemeComponent from '@/libs/components/Theme';
export default memo(({ ...props }) => {
    return <ThemeComponent component={Component} {...props}/>;
});
const Component = memo(({ text, enabled = true, style = {}, colorScheme, fontScale, ...props }) => {
    const Theme = colors.theme[colorScheme];
    const textStyle = useMemo(() => [styles.text, { color: enabled ? Theme.text : Theme.text2 }, style], [enabled, Theme, style]);
    return (<Text$ fontScale={fontScale} style={textStyle} {...props}>
            {text}
        </Text$>);
});
const styles = StyleSheet.create({
    text: {
        fontSize: 17,
    }
});
