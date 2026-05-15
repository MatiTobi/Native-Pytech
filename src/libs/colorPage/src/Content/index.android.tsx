import { Host, Column, Row } from '@expo/ui/jetpack-compose';
import React, { memo } from 'react';

import Item from '../Item';
import type Props from './types';



export default memo(({
	colorRows,
	...pageProps

}: Props) => {
	return (
		<Host style={{ flex: 1 }}>
			<Column verticalArrangement={{ spacedBy: 16 }}>
				{colorRows.map((row, index) => (
					<Row key={index} verticalArrangement="spaceBetween" >
						{row.map((color, indexColor) => (
							<Item color={color} size={55} {...pageProps}/>
						))}
					</Row>
				))}
			</Column>
		</Host>
	)
})
