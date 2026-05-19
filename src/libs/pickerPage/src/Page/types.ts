
type Props = {
    /**
        Children to be rendered inside the picker.
    */
    children: React.ReactNode

    /**
        Selected value.
    */
    selected?: string

    /**
        Function to be called when the user changes the search text.
    */
    onChangeSearchText: (text: string) => void

    /**
        Function to be called when the user selects a selection.
    */
    onSelectionChange?: (selection: string) => void | Promise<void>

    /**
        Placeholder for the search bar.
        @default 'Buscar'
    */
    placeholderSearchBar?: string

    /**
        Function to be called when the user press the cancel button on the header.
        @default () => router.back()
    */
    onPressHeaderCancel?: () => void
    
    /**
        Adjusts the row insets on ios.
        Is is useful when uses items with gradients.
        @platform ios
    */
    adjustRowInsets?: boolean
}

export default Props