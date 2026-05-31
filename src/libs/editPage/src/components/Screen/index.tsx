import { ScrollView } from 'react-native';

import Table from '@/libs/table'



export default ({ children }: {children: React.ReactNode}) => (
	<ScrollView showsVerticalScrollIndicator={false}>
		<Table>
			{children}
		</Table>
	</ScrollView>
)