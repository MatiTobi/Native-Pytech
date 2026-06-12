import { DatePicker } from '@expo/ui/swift-ui';
import { memo } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';

import type Props from '../types';



export default memo(({
	label,
	selection,
	minDate,
	maxDate,
	onValueChange
	
}: Props) => (
	<DatePicker
		title={label}
		selection={selection}
		onDateChange={onValueChange}
		modifiers={[environment('locale', 'es_ES')]}
		range={{
			start: minDate,
			end: maxDate,
		}}
	/>
))