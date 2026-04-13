/*import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useSegments } from 'expo-router';
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
		<NativeTabs
			minimizeBehavior="onScrollDown"
			blurEffect="dark" // Sólo se puede ver en iOS build app
		>
			{children}
		</NativeTabs>
	)
}) as Component;


Tab.Screen = Screen;

export default Tab;*/