import { ScrollView } from 'react-native';
import Table from '@/libs/table';
export default ({ children }) => (<ScrollView>
		<Table>
			{children}
		</Table>
	</ScrollView>);
