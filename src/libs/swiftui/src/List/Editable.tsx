import { List, Section, ListProps, ListForEachProps, SectionProps } from "@expo/ui/swift-ui"
import { listStyle, environment, moveDisabled, tag, ViewModifier, deleteDisabled, padding } from "@expo/ui/swift-ui/modifiers"
import React, { memo, useCallback, useMemo, useState } from "react"



type Props<T> = {
    /**
        The children elements to be rendered inside the list.
        They will be rendered before the data items.
    */
    children?: React.ReactNode

    /**
        The data items to be rendered inside the list.
        @default []
    */
    data?: T[]

    /**
        The function to extract the key from the data item.
        @example
        keyExtractor={(item) => item.id}
    */
    keyExtractor?: (item: T) => string | number

    /**
        Whether the list is in edit mode.
        @default false
    */
    editMode?: boolean

    /**
        The function to handle the delete event.
        
    */
    onDelete?: ({index}: {index: number}) => void

    /**
        The function to handle the move event.
    */
    onMove?: ({listIndexes, destinationIndex}: {listIndexes: number[], destinationIndex: number}) => void

    /**
        The function to render the item.
        The prop "modifier" is the modifier to be applied to the item [tag(key)].
    */
    renderItem?: ({item, modifier}: {item: T, modifier: ViewModifier}) => React.ReactNode

    /**
        The props to be applied to the list.
    */
    listProps?: ListProps

    /**
        The props to be applied to the list.
    */
    listForEachProps?: Omit<ListForEachProps, 'children' | 'onDelete' | 'onMove'>

    /**
        The props to be applied to the list.
    */
    listSectionProps?: SectionProps

    /**
        Whether to enable the move of the items.
        @default false
    */
    enableMove?: boolean

    /**
        Whether to enable the delete of the items.
        @default false
    */
    enableDelete?: boolean

    /**
        Whether to remove the top padding of the list.
        It puts [padding({ top: -15 })] to the list.
        @default false
    */
    withoutTopPadding?: boolean
}


function Component<T>({
    children,
    data=[],
    keyExtractor,
    editMode=false,
    onDelete,
    onMove,
    renderItem,
    listProps,
    listForEachProps,
    listSectionProps,
    enableMove=false,
    enableDelete=false,
    withoutTopPadding=false,

}: Props<T>){

    // ---------------------- Variables ----------------------
    const [_data, setData] = useState<T[]>(data ?? [])


    // ---------------------- Modifiers ----------------------
    const modifiersList = useMemo(() => [
        listStyle('inset'),
        environment('editMode', editMode ? 'active' : 'inactive'),
        moveDisabled(!enableMove),
        deleteDisabled(!enableDelete),
        withoutTopPadding ? padding({ top: -15 }) : undefined,
    ], [editMode, enableMove, enableDelete, withoutTopPadding])

    const modifiersListForEach = useMemo(() => [
        moveDisabled(!enableMove),
        deleteDisabled(!enableDelete)
    ], [enableMove, enableDelete])


    // ---------------------- Functions ----------------------
	const handleDelete = useCallback((indices: number[]) => {
		setData(prev => prev.filter((_, i) => !indices.includes(i)))
        for (const index of indices) {
            onDelete?.({index})
        }
	}, [onDelete])

    const handleMove = useCallback((sourceIndices: number[], destination: number) => {
        const adjustedDest = sourceIndices[0] < destination ? destination - 1 : destination

        setData(prev => {
          const newData = [...prev]
          const [removed] = newData.splice(sourceIndices[0], 1)
          newData.splice(adjustedDest, 0, removed)
          return newData
        })
        onMove?.({listIndexes: sourceIndices, destinationIndex: adjustedDest})
    }, [onMove])

    return (
        <List
            {...listProps}
            modifiers={[...modifiersList, ...(listProps?.modifiers || [])]}
        >
            {children}
            <Section {...listSectionProps}>
                <List.ForEach
                    {...listForEachProps}
                    onDelete={handleDelete}
                    onMove={handleMove}
                    modifiers={[...modifiersListForEach, ...(listForEachProps?.modifiers || [])]}
                >
                    {_data.map((item, index: number) => {
                        const key = keyExtractor?.(item) ?? index
                        return renderItem?.({item, modifier: tag(key)})
                    })}
                </List.ForEach>
            </Section>
        </List>
    )
}

export default memo(Component) as typeof Component