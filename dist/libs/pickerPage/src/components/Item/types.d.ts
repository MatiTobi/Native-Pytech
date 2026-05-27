import type { SFSymbol } from 'sf-symbols-typescript';
import { Ionicons } from '@expo/vector-icons';
type Props = {
    /**
        The key of the item to be used in the tag modifier.
        Is the value that will be selected when the item is clicked.
    */
    itemKey: string;
    /**
        The title text to be displayed in the label.
    */
    title?: string;
    /**
        The name of the SFSymbol to be displayed in the label.
        @platform ios
    */
    systemImage?: SFSymbol;
    /**
        The name of the Ionicon to be displayed in the label.
    */
    ionIconName?: keyof typeof Ionicons.glyphMap;
    /**
        Custom icon view to be displayed in the label.
        When provided, this takes precedence over `systemImage`.
    */
    icon?: React.ReactNode;
};
export default Props;
