import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
export default ({ name, title, badge, iconNameIos = 'gearshape.fill', iconNameAndroid = 'cog-outline' }) => {
    return (<NativeTabs.Trigger name={name}>
            <Label>{title}</Label>
            <Icon sf={iconNameIos} drawable="bottom_bar"/>
            <Badge>{String(badge)}</Badge>
        </NativeTabs.Trigger>);
};
