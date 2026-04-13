import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useSegments } from 'expo-router';
import React, { memo } from "react";

import Props from './types';



export default memo(({
	onSegmentChange,
	listTabs

}: Props) => {

	const segments = useSegments()
	const hideTabBar = onSegmentChange?.({ segments }) ?? false
  
	return (
		<NativeTabs
			minimizeBehavior="onScrollDown"
			blurEffect="dark" // Sólo se puede ver en iOS build app
		>
			{listTabs.map((tab) => (
				<NativeTabs.Trigger key={tab.name} name={tab.name}>
					<Label>{tab.title}</Label>
					<Icon sf={tab.iconNameIos || 'gearshape.fill'} drawable="bottom_bar" />
					{tab.badge && <Badge>{String(tab.badge)}</Badge>}
				</NativeTabs.Trigger>
			))}
		</NativeTabs>
	)
})