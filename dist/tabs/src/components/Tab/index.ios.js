import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useSegments } from 'expo-router';
import React, { memo } from "react";
import Screen from '../Screen';
const Tab = memo(({ children, onSegmentChange }) => {
    const segments = useSegments();
    const hideTabBar = onSegmentChange?.({ segments }) ?? false;
    return (<NativeTabs minimizeBehavior="onScrollDown" blurEffect="dark" // Sólo se puede ver en iOS build app
    >
			{children}
		</NativeTabs>);
});
Tab.Screen = Screen;
export default Tab;
