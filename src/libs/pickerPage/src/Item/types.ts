import type { SFSymbol } from 'sf-symbols-typescript';


type Props = {
    /**
        The key of the item to be used in the tag modifier.
        Is the value that will be selected when the item is clicked.
    */
    itemKey: string

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
        Custom icon view to be displayed in the label.
        When provided, this takes precedence over `systemImage`.
    */
    icon?: React.ReactNode;
}

export default Props