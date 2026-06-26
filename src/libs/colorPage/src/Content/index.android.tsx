import { memo } from 'react';

import { Host, Column, Row } from '@expo/ui/jetpack-compose';
import { fillMaxWidth } from '@expo/ui/jetpack-compose/modifiers';

import Props from './types';
import Item from '../Item';



export default memo(({
	colorRows,
	...pageProps

}: Props) => {
	return (
		<Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
			<Column verticalArrangement={{ spacedBy: 2 }}>
				{colorRows.map((row, index) => (
					<Row key={index} horizontalArrangement="spaceEvenly" verticalArrangement="center" modifiers={[ fillMaxWidth() ]}>
						{row.map((color, indexColor) => (
							<Item key={color} color={color} size={55} {...pageProps} />
						))
						}
					</Row>
				))}
			</Column>
		</Host>
	)
})
