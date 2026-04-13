import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

import type BaseProps from './types'
import { SFSymbol } from "sf-symbols-typescript";



type Props = BaseProps & {
    /**
        Icon name for iOS. En Android no se usa.
        @default 'gearshape.fill'
    */
    iconNameIos?: SFSymbol;
    /**
        Icon name for Android. En iOS no se usa.
        @default 'cog-outline'
    */
    iconNameAndroid?: string;
}


export default ({
    name,
    title,
    badge,
    iconNameIos='gearshape.fill',
    iconNameAndroid='cog-outline'

}: Props) => {
    
    return (
        <NativeTabs.Trigger name={name}>
            <Label>{title}</Label>
            <Icon sf={iconNameIos} drawable="bottom_bar" />
            <Badge>{String(badge)}</Badge>
        </NativeTabs.Trigger>
)
}