/*import { Tabs, useSegments } from 'expo-router';
import React, { memo } from "react";

import Props, { Component } from './types';
import Screen from '../Screen';



const Tab = memo(({
    children,
    onSegmentChange

}: Props) => {

    const segments = useSegments()
    const hideTabBar = onSegmentChange?.({ segments }) ?? false
  
    return (
        <Tabs
            tabBar={hideTabBar ? () => null : undefined}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0
                },
            }}
        >
            {children}
        </Tabs>
    )
}) as Component;


Tab.Screen = Screen;

export default Tab;*/ 
