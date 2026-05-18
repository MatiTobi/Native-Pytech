import React, { memo } from 'react';
import { Host, Column, Row } from '@expo/ui/jetpack-compose';
import { fillMaxWidth } from '@expo/ui/jetpack-compose/modifiers';
import Item from '../Item';
export default memo(({ colorRows, ...pageProps }) => {
    return (<Host style={{ flex: 1 }}>
			<Column verticalArrangement={{ spacedBy: 2 }}>
				{colorRows.map((row, index) => (<Row key={index} horizontalArrangement="spaceEvenly" verticalArrangement="center" modifiers={[fillMaxWidth()]}>
						{row.map((color, indexColor) => (<Item key={color} color={color} size={55} {...pageProps}/>))}
					</Row>))}
			</Column>
		</Host>);
});
