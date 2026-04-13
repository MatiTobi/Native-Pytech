import { useSegments } from 'expo-router';
import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";



export default () => {
	const segment = useSegments()
	const hide = segment.includes('[consumo]')
	
	return (
		<NativeTabs minimizeBehavior="onScrollDown" blurEffect="dark"> {/*Sólo se puede ver en iOS build app*/}

			<NativeTabs.Trigger name="reportes">
				<Label>Reportes</Label>
				<Icon sf="info.circle.fill" drawable="bottom_bar" />
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="extractos">
				<Label>Extractos</Label>
				<Icon sf="wallet.bifold.fill" drawable="bottom_bar" />
				<Badge>2</Badge>
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="libretas">
				<Label>Rutas</Label>
				<Icon sf="location.fill" drawable="bottom_bar" /> 
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="ajustes">
				<Label>Ajustes</Label>
				<Icon sf="gearshape.fill" drawable="bottom_bar" /> 
			</NativeTabs.Trigger>
			
		</NativeTabs>
	)
}

