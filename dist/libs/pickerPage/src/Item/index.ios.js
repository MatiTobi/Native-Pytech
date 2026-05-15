import React, { memo } from "react";
import { Label } from "@expo/ui/swift-ui";
import { tag } from "@expo/ui/swift-ui/modifiers";
/**
    Item component for the picker page.
    It is necessary to use the tag modifier to display the item in the picker.
*/
export default memo(({ itemKey, ...props }) => (<Label {...props} modifiers={[tag(itemKey)]}/>));
