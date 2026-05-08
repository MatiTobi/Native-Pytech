import { List, Section } from "@expo/ui/swift-ui"
import { listStyle, environment, moveDisabled, tag, deleteDisabled, padding } from "@expo/ui/swift-ui/modifiers"
import React, { memo, useCallback, useEffect, useMemo, useState } from "react"

import Hooks from '@/libs/constants/hooks'
import type Props from "./types"



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


    // ---------------------- Hooks ----------------------
    Hooks.useEffectWithoutFirstRender(() => setData(data ?? []), [data])


    // ---------------------- Modifiers ----------------------
    const modifiersList = useMemo(() => [
        listStyle('inset'),
        environment('editMode', editMode ? 'active' : 'inactive'),
        moveDisabled(!enableMove),
        deleteDisabled(!enableDelete),
        ...(withoutTopPadding ? [padding({ top: -15 })] : []),
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