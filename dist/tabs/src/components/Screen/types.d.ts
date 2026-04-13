import { SFSymbol } from "sf-symbols-typescript";
import { ComponentProps } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Props = {
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
    */
    iconNameIos?: SFSymbol;
    /**
        Icon name for the screen.
    */
    iconNameAndroid?: ComponentProps<typeof MaterialCommunityIcons>["name"];
};
export default Props;
