import { ListProps, ListForEachProps, SectionProps } from "@expo/ui/swift-ui";
import { ViewModifier } from "@expo/ui/swift-ui/modifiers";
import React from "react";
type Props = {
    /**
        The children elements to be rendered inside the list.
        They will be rendered before the data items.
    */
    children?: React.ReactNode;
    /**
        The data items to be rendered inside the list.
        @default []
    */
    data?: any[];
    /**
        The function to extract the key from the data item.
        @example
        keyExtractor={(item) => item.id}
    */
    keyExtractor?: (item: any) => string | number;
    /**
        Whether the list is in edit mode.
        @default false
    */
    editMode?: boolean;
    /**
        The function to handle the delete event.
        
    */
    onDelete?: ({ index }: {
        index: number;
    }) => void;
    /**
        The function to handle the move event.
    */
    onMove?: ({ listIndexes, destinationIndex }: {
        listIndexes: number[];
        destinationIndex: number;
    }) => void;
    /**
        The function to render the item.
        The prop "modifier" is the modifier to be applied to the item [tag(key)].
    */
    renderItem?: ({ item, modifier }: {
        item: any;
        modifier: ViewModifier;
    }) => React.ReactNode;
    /**
        The props to be applied to the list.
    */
    listProps?: ListProps;
    /**
        The props to be applied to the list.
    */
    listForEachProps?: Omit<ListForEachProps, 'children' | 'onDelete' | 'onMove'>;
    /**
        The props to be applied to the list.
    */
    listSectionProps?: SectionProps;
    /**
        Whether to disable the move of the items.
        @default true
    */
    disableMove?: boolean;
    /**
        Whether to disable the delete of the items.
        @default true
    */
    disableDelete?: boolean;
    /**
        Whether to remove the top padding of the list.
        It puts [padding({ top: -15 })] to the list.
        @default false
    */
    withoutTopPadding?: boolean;
};
declare const _default: React.MemoExoticComponent<({ children, data, keyExtractor, editMode, onDelete, onMove, renderItem, listProps, listForEachProps, listSectionProps, disableMove, disableDelete, withoutTopPadding, }: Props) => React.JSX.Element>;
export default _default;
