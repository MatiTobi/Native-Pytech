import { memo, useMemo } from 'react';
import { ScrollView } from 'react-native';

import Table from "@/libs/table"
import { Provider } from '../../context/page';
import type Props from './types';



export default memo(({
	children,
    selected,
    onSelectionChange

}: Props) => {

	const value = useMemo(() => ({ selected, onSelectionChange }), [selected])

	return (
		<Provider value={value}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Table>
					{children}
				</Table>
			</ScrollView>
		</Provider>
	)
})
