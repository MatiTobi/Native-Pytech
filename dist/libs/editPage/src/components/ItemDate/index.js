import { Section, DatePicker } from '@expo/ui/swift-ui';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
import { useItem } from '../../context/item';
export default memo(({ label, defaultValue, minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100)), maxDate = new Date(), modifiers, ...restProps }) => {
    // ------------------- Variables -------------------
    const { store } = usePage();
    const { index } = useItem();
    const [selection, setSelection] = useState(defaultValue);
    const _modifiers = useMemo(() => [
        environment('locale', 'es_ES'),
        ...(modifiers ?? []),
    ], [modifiers]);
    // ------------------- Hooks -------------------
    useEffect(() => setSelection(defaultValue), [defaultValue]);
    // -------------------- Functions --------------------
    const onValueChange = useCallback((value) => {
        setSelection(value);
        store.values[index].set({
            value: value,
            hasChanged: value.getTime() !== defaultValue?.getTime(),
            isValid: true,
        });
    }, []);
    return (<Section>
			<DatePicker title={label} selection={selection} onDateChange={onValueChange} modifiers={_modifiers} range={{
            start: minDate,
            end: maxDate,
        }} {...restProps}/>
		</Section>);
});
