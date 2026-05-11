import { listStyle, environment, moveDisabled, deleteDisabled } from "@expo/ui/swift-ui/modifiers"
import React, { memo, useMemo } from "react"

import type Props from "./types"
import BaseList from "../../BaseList"
import { Provider } from '../../../../context/ListEditable'



export default memo(({
    children,
    editMode,
    moveEnabled,
    deleteEnabled,
    modifiers,
    ...listProps

}: Props) => {

    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
    
        listStyle('inset'),
        environment('editMode', editMode ? 'active' : 'inactive'),
    
        ...(moveEnabled ? [moveDisabled(false)] : []),
        ...(deleteEnabled ? [deleteDisabled(false)] : []),
    ], [modifiers, editMode, moveEnabled, deleteEnabled])

    const value = useMemo(() => ({ enableMove: moveEnabled, enableDelete: deleteEnabled }), [moveEnabled, deleteEnabled])


    return (
        <BaseList {...listProps} modifiers={_modifiers}>
            <Provider value={value}>
                {children}
            </Provider>
        </BaseList>
    )
})

