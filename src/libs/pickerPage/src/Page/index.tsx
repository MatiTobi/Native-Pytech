import { Stack, router } from "expo-router"
import React, { memo } from "react"

import type Props from './types'
import Content from '../Content'



export default memo(({
    children,
    onChangeSearchText,
    onSelectionChange,
    placeholderSearchBar='Buscar',
	...props

}: Props) => {

    const _onSelectionChange = async (selection: string) => {
        await onSelectionChange?.(selection)
        router.back()
    }

    return (
        <>
            <Stack.Toolbar placement="right">
				<Stack.Toolbar.Button onPress={() => router.back()}>
					<Stack.Toolbar.Icon sf="xmark" />
				</Stack.Toolbar.Button>
			</Stack.Toolbar>

            <Stack.SearchBar
                placeholder={placeholderSearchBar}
                onChangeText={(e) => onChangeSearchText(e.nativeEvent.text)}
            />

			<Content onSelectionChange={_onSelectionChange} {...props}>
				{children}
			</Content>
        </>
    )
})
