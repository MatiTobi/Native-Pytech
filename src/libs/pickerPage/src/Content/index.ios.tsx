import { Host, Section, Picker } from '@expo/ui/swift-ui';
import { listRowInsets, listStyle, pickerStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
import { List } from "@/libs/swiftui"

import type Props from './types';



export default memo(({
	children,
    selectedValue,
    onSelectionChange,
    adjustRowInsets

}: Props) => {

	const _modifiersPicker = useMemo(() => [
        pickerStyle('inline'),
		...(adjustRowInsets ? [listRowInsets({top: 20, bottom: 20, leading: 25, trailing: 20})] : []),
    ], [adjustRowInsets])
	
	return (
		<Host style={{ flex: 1 }}>
			<List modifiers={[listStyle('inset')]} disablePaddingTop>
				<Section>
					<Picker
						selection={selectedValue}
						onSelectionChange={onSelectionChange}
						modifiers={_modifiersPicker}
					>
						{children}
					</Picker>
				</Section>
			</List>
		</Host>
	)
})
