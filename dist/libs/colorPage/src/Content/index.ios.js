import { Host, HStack, VStack, Spacer } from '@expo/ui/swift-ui';
import React, { memo, Fragment } from 'react';
import Item from '../Item';
export default memo(({ colorRows, ...pageProps }) => {
    return (<Host style={{ flex: 1 }}>
			<VStack spacing={16}>
				{colorRows.map((row, index) => (<HStack key={index}>
						{row.map((color, indexColor) => (<Fragment key={color}>
								{indexColor === 0 && <Spacer />}
								<Item color={color} size={55} {...pageProps}/>
								<Spacer />
							</Fragment>))}
					</HStack>))}
			</VStack>
		</Host>);
});
