import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

import type Props from './types'




export default ({
    name,
    title,
    badge,
    iconNameIos='gearshape.fill',
    iconNameAndroid='cog-outline'

}: Props) => {
    
    return (
        <Tabs.Screen
            name={name}
            options={{
                title:title,
                tabBarBadge: badge,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name={iconNameAndroid} color={color} size={size} />
                ),
            }}
        />
    )
}