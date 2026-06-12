import { Section, DatePicker } from '@expo/ui/swift-ui';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
export default memo(({ itemKey, label, defaultValue, minDate, maxDate, onValueChange, }) => {
    const { store, registerItem } = usePage();
    const [selection, setSelection] = useState(defaultValue);
    // Key
    const keyRef = useRef(itemKey);
    useEffect(() => {
        keyRef.current = registerItem(itemKey);
        _onValueChange(selection ?? new Date());
    }, []);
    // Hooks
    useEffect(() => setSelection(defaultValue), [defaultValue]);
    const _onValueChange = useCallback((value) => {
        setSelection(value);
        store.values[keyRef.current ?? 0].set({
            value: value,
            hasChanged: value.getTime() !== defaultValue?.getTime(),
            isValid: true,
        });
        onValueChange?.(value);
    }, []);
    return (<Section>
			<DatePicker title={label} selection={selection} onDateChange={_onValueChange} modifiers={[environment('locale', 'es_ES')]} range={{
            start: minDate,
            end: maxDate,
        }}/>
		</Section>);
});
