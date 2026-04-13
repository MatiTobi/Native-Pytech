import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default ({ name, title, badge, iconNameIos = 'gearshape.fill', iconNameAndroid = 'cog-outline' }) => {
    return (<Tabs.Screen name={name} options={{
            title: title || name,
            tabBarBadge: badge,
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name={iconNameAndroid} color={color} size={size}/>),
        }}/>);
};
