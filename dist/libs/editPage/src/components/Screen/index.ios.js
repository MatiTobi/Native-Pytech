import { Host, List, Section } from '@expo/ui/swift-ui';
export default ({ children }) => (<Host style={{ flex: 1 }}>
		<List>
			<Section>
				{children}
			</Section>
		</List>
	</Host>);
