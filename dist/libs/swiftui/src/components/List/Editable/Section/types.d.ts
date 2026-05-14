import { ViewModifier } from "@expo/ui/swift-ui/modifiers";
import { SectionProps } from "@expo/ui/swift-ui";
type Props<T> = {
    /**
        The data items to be rendered inside the list.
        @default []
    */
    data?: T[];
    /**
        The function to extract the key from the data item.
        @example
        keyExtractor={(item) => item.id}
    */
    keyExtractor?: (item: T) => string | number;
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
    renderItem?: ({ item, tagModifier }: {
        item: T;
        tagModifier: ViewModifier;
    }) => React.ReactNode;
    /**
        The props to apply to the Section.
    */
    sectionProps?: Omit<SectionProps, 'children'>;
};
export default Props;
