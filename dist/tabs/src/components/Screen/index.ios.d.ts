import type BaseProps from './types';
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
};
declare const _default: ({ name, title, badge, iconNameIos, iconNameAndroid }: Props) => import("react").JSX.Element;
export default _default;
