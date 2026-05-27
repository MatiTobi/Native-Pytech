import React, { memo, useMemo } from 'react';
import { ScrollView } from 'react-native';
import Table from "../../../../../libs/table";
import { Provider } from '../../context/page';
export default memo(({ children, selected, onSelectionChange }) => {
    const value = useMemo(() => ({ selected, onSelectionChange }), [selected]);
    return (<Provider value={value}>
			<ScrollView>
				<Table>
					{children}
				</Table>
			</ScrollView>
		</Provider>);
});
