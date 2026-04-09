import { Text } from "react-native";
import { memo } from "react";
import { useApp } from "../providers/App";
export default memo(({ children, fontScale, ...props }) => {
    if (fontScale !== undefined)
        return <Text key={fontScale.toString()} {...props}>{children}</Text>;
    const { fontScale: fontScaleApp } = useApp();
    return (<Text key={fontScaleApp.toString()} {...props}>
            {children}
        </Text>);
});
