import { ScrollView } from 'react-native';
import Table from '../../../../../libs/table';
export default ({ children }) => (<ScrollView showsVerticalScrollIndicator={false}>
		<Table>
			{children}
		</Table>
	</ScrollView>);
