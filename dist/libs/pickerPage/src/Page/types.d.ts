type Props = {
    /**
        Children to be rendered inside the picker.
    */
    children: React.ReactNode;
    /**
        Selected value.
    */
    selectedValue?: string;
    /**
        Function to be called when the user changes the search text.
    */
    onChangeSearchText: (text: string) => void;
    /**
        Function to be called when the user selects a selection.
    */
    onSelectionChange?: (selection: string) => void;
    /**
        Adjusts the row insets on ios.
        Is is useful when uses items with gradients.
        @platform ios
    */
    adjustRowInsets?: boolean;
};
export default Props;
