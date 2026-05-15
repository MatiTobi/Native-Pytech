import React, { memo } from "react"
import { Label } from "@expo/ui/swift-ui"
import { tag } from "@expo/ui/swift-ui/modifiers"

import type Props from "./types"



/**
    Item component for the picker page.
	It is necessary to use the tag modifier to display the item in the picker.
*/
export default memo(({
    itemKey,
    ...props

}: Props) => (
        <Label
			{...props}
			modifiers={[tag(itemKey)]}
		/>
    )
)