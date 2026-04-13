import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

import type BaseProps from './types'
import { ComponentProps } from "react";



type Props = BaseProps & {
    /**
        Icon name for iOS. En Android no se usa.
        @default 'gearshape.fill'
    */
    iconNameIos?: string;
    /**
        Icon name for Android. En iOS no se usa.
        @default 'cog-outline'
    */
    iconNameAndroid?: ComponentProps<typeof MaterialCommunityIcons>["name"];
}


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