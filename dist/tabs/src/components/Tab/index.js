import { Tabs, useSegments } from 'expo-router';
import React, { memo } from "react";
import Screen from '../Screen';
const Tab = memo(({ children, onSegmentChange }) => {
    const segments = useSegments();
    const hideTabBar = onSegmentChange?.({ segments }) ?? false;
    return (<Tabs tabBar={hideTabBar ? () => null : undefined} screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 0
            },
        }}>
			{children}
		</Tabs>);
});
Tab.Screen = Screen;
export default Tab;
