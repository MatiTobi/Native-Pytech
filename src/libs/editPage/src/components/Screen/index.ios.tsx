import { Host, List, Section } from '@expo/ui/swift-ui';


export default ({ children }: {children: React.ReactNode}) => (
	<Host style={{ flex: 1 }}>
		<List>
			<Section>
				{children}
			</Section>
		</List>
	</Host>
)