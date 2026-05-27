import { Ionicons } from '@expo/vector-icons';
import { type SFSymbol } from 'sf-symbols-typescript';
type Props = {
    /**
        The name of the system image (SF Symbol).
        For example: 'photo', 'heart.fill', 'star.circle'
        @platform ios
    */
    systemName?: SFSymbol;
    /**
        The name of the Ionicon to be displayed in the label.
    */
    ionIconName?: keyof typeof Ionicons.glyphMap;
    /**
        The icon to display.
        @platform web
    */
    icon?: React.ReactNode;
    /**
        The size of the icon.
        @platform ios
        @default 100
    */
    size?: number;
};
export default Props;
