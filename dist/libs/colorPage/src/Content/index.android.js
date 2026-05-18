import { Host, Column, Row } from '@expo/ui/jetpack-compose';
import React, { memo } from 'react';
export default memo(({ colorRows, renderItem, ...pageProps }) => {
    return (<Host style={{ flex: 1 }}>
			<Column verticalArrangement={{ spacedBy: 16 }}>
				{colorRows.map((row, index) => (<Row key={index} verticalArrangement="spaceEvenly">
						{row.map((color, indexColor) => (renderItem?.({ color, size: 55, ...pageProps })))}
					</Row>))}
			</Column>
		</Host>);
});
