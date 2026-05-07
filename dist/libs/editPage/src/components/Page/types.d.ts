type Props<T> = {
    /**
        The data items to be rendered inside the list.
        @default []
    */
    data?: T[];
    /**
        The function to render the item.
    */
    renderItem?: (item: T) => React.ReactNode;
    /**
        Function to be called when the user saves the changes.
        If the function returns true, the user will be redirected to the previous screen.
    */
    onSave?: (values: (string | null)[]) => boolean | Promise<boolean>;
};
export type Values = Record<number, {
    value: string | null | undefined;
    hasChanged: boolean;
    isValid: boolean;
}>;
export type Store = {
    values: Values;
    saveEnabled: boolean;
};
export default Props;
