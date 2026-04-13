import { MaterialCommunityIcons } from "@expo/vector-icons";
import type BaseProps from './types';
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
};
declare const _default: ({ name, title, badge, iconNameIos, iconNameAndroid }: Props) => import("react").JSX.Element;
export default _default;
