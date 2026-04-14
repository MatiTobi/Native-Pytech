import { ComponentProps } from "react";

import { SFSymbol } from "sf-symbols-typescript";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeTabsTabBarItemRole } from "expo-router/unstable-native-tabs";



type Props = {
    /**
        If true, the tabBar is hidden.
    */
    hidden?: boolean;
    /**
        Función para ejecutar cuando se cambia entre páginas.
        En Android se puede usar para ocultar el tabBar.
        Si retorna true, se oculta el tabBar.
    */
    onSegmentChange?: ({ segments }: { segments: string[] }) => boolean | void
    /**
    
    */
    listTabs: TabProps[]
}


type TabProps = {
    /**
        Name path of the screen.
    */
    name: string;
    /**
        Title of the screen.
    */
    title?: string;
    /**
        Badge of the screen.
    */
    badge?: number | string;
    /**
        Icon name for the screen.
        @default 'gearshape.fill'
    */
    iconNameIos?: SFSymbol;
    /**
        Icon name for the screen.
        @default 'cog-outline'
    */
    iconNameAndroid?: ComponentProps<typeof MaterialCommunityIcons>["name"];

    /**
        Role of the screen.
        @platform ios
    */
    role?: NativeTabsTabBarItemRole;
}

export default Props