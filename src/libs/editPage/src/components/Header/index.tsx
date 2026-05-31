import { memo } from "react"
import { router, Stack } from "expo-router"

import Props from "./types"



export default memo(({ saveEnabled, onPressSave }: Props) => {
    return (
        <>
            <Stack.Toolbar placement="left">
                <Stack.Toolbar.Button onPress={() => router.back()}>
                    <Stack.Toolbar.Icon sf="xmark" />
                </Stack.Toolbar.Button>
            </Stack.Toolbar>

            <Stack.Toolbar placement="right">
                <Stack.Toolbar.Button disabled={!saveEnabled} variant="done" onPress={onPressSave}>
                    <Stack.Toolbar.Icon sf="checkmark" />
                </Stack.Toolbar.Button>
            </Stack.Toolbar>
        </>
    )
})

