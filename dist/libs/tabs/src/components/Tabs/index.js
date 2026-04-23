import { useSegments, Tabs } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { memo } from "react";
import { capitalize } from 'libs/constants/utils';
export default memo(({ hidden = false, onSegmentChange, listTabs }) => {
    const segments = useSegments();
    const hideTabBar = onSegmentChange?.({ segments }) ?? false;
    return (<Tabs tabBar={hideTabBar || hidden ? () => null : undefined} screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 0
            },
        }}>
			{listTabs.map((tab) => (<Tabs.Screen name={tab.name} options={{
                title: tab.title || capitalize(tab.name),
                tabBarBadge: tab.badge,
                tabBarIcon: ({ color, size }) => (tab.iconNameAndroid && <MaterialCommunityIcons name={tab.iconNameAndroid} color={color} size={size}/>),
            }}/>))}
		</Tabs>);
});
