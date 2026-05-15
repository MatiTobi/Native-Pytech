import { Stack, useRouter } from "expo-router"
import React, { memo } from "react"

import type Props from './types'
import Content from '../Content'



export default memo(({
    children,
    onChangeSearchText,
    onSelectionChange,
	...props

}: Props) => {

    const router = useRouter()

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
                placeholder="Buscar usuario"
                onChangeText={(e) => onChangeSearchText(e.nativeEvent.text)}
            />

			<Content onSelectionChange={_onSelectionChange} {...props}>
				{children}
			</Content>
        </>
    )
})
