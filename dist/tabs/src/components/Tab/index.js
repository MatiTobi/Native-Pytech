import { useSegments, Tabs } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { memo } from "react";
export default memo(({ onSegmentChange, listTabs }) => {
    const segments = useSegments();
    const hideTabBar = onSegmentChange?.({ segments }) ?? false;
    return (<Tabs tabBar={hideTabBar ? () => null : undefined} screenOptions={{
            headerShown: false,
            tabBarStyle: {
                borderTopWidth: 0
            },
        }}>
			{listTabs.map((tab) => (<Tabs.Screen name={tab.name} options={{
                title: tab.title || tab.name,
                tabBarBadge: tab.badge,
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name={tab.iconNameAndroid || 'cog-outline'} color={color} size={size}/>),
            }}/>))}
		</Tabs>);
});
