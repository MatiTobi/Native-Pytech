import { Section, DatePicker } from '@expo/ui/swift-ui';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
export default memo(({ itemKey, label, defaultValue, minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100)), maxDate = new Date(), }) => {
    const { store, registerItem } = usePage();
    const key = registerItem(itemKey);
    const [selection, setSelection] = useState(defaultValue);
    // Hooks
    useEffect(() => setSelection(defaultValue), [defaultValue]);
    const onValueChange = useCallback((value) => {
        setSelection(value);
        store.values[key].set({
            value: value,
            hasChanged: value.getTime() !== defaultValue?.getTime(),
            isValid: true,
        });
    }, []);
    return (<Section>
			<DatePicker title={label} selection={selection} onDateChange={onValueChange} modifiers={[environment('locale', 'es_ES')]} range={{
            start: minDate,
            end: maxDate,
        }}/>
		</Section>);
});
