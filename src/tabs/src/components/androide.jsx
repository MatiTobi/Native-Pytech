import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, useSegments } from 'expo-router';
import React from "react";



export default () => {

	const segment = useSegments()
	const hide = segment.includes('[date]')
  
	return (
		<Tabs
			tabBar={hide ? () => null : undefined}
			screenOptions={{ 
				headerShown: false,
				tabBarStyle: {
					borderTopWidth: 0
				},
				//unmountOnBlur: false
			}}
		>
			<Tabs.Screen
				name="reportes"
				options={{
					//href: null,
					title: 'Reportes',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="alert-circle-outline" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="extractos"
				options={{
					title: 'Extractos',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="wallet-outline" /*bank-outline credit-card-outline wallet-outline*/ color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="libretas"
				options={{
					title: 'Rutas',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="navigation-outline" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="ajustes"
				options={{
					title: 'Ajustes',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cog-outline" color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	)
}

