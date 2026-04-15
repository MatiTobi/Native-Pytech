/*import { useSegments, Tabs } from 'expo-router';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { memo } from "react";

import { capitalize } from '../../../../../libs/constants/utils';
import Props from './types';



export default memo(({
    hidden=false,
    onSegmentChange,
    listTabs

}: Props) => {

    const segments = useSegments()
    const hideTabBar = onSegmentChange?.({ segments }) ?? false
  
    return (
        <Tabs
            tabBar={hideTabBar || hidden ? () => null : undefined}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0
                },
            }}
        >
            {listTabs.map((tab) => (
                <Tabs.Screen
                    name={tab.name}
                    options={{
                        title:tab.title || capitalize(tab.name),
                        tabBarBadge: tab.badge,
                        tabBarIcon: ({ color, size }) => (
                            tab.iconNameAndroid && <MaterialCommunityIcons name={tab.iconNameAndroid} color={color} size={size} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    )
})*/
import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Tabs, useSegments } from 'expo-router';
import React, { memo } from "react";
import { capitalize } from '../../../../../libs/constants/utils';
export default memo(({ hidden = false, onSegmentChange, listTabs }) => {
    const segments = useSegments();
    const hideTabBar = onSegmentChange?.({ segments }) ?? false;
    // tabBar Hidden
    if (hidden)
        return (<Tabs tabBar={() => null} screenOptions={{ headerShown: false }}>
			{listTabs.map((tab) => (<Tabs.Screen name={tab.name}/>))}
		</Tabs>);
    return (<NativeTabs minimizeBehavior="onScrollDown" blurEffect="dark" // Sólo se puede ver en iOS build app
    >
			{listTabs.map((tab) => (<NativeTabs.Trigger key={tab.name} name={tab.name} role={tab.role}>
					<Label>{tab.title || capitalize(tab.name)}</Label>
					{tab.iconNameIos && <Icon sf={tab.iconNameIos} drawable="bottom_bar"/>}
					{tab.badge && <Badge>{String(tab.badge)}</Badge>}
				</NativeTabs.Trigger>))}
		</NativeTabs>);
});
