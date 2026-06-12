import { DatePicker } from '@expo/ui/swift-ui';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { environment } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
export default memo(({ itemKey, label, selection, defaultValue, minDate, maxDate, onValueChange, }) => {
    const { store, registerItem } = usePage();
    const [_selection, setSelection] = useState(selection);
    // Key
    const keyRef = useRef(itemKey);
    useEffect(() => {
        keyRef.current = registerItem(itemKey);
        _onValueChange(_selection ?? defaultValue ?? new Date());
    }, []);
    // Hooks
    useEffect(() => setSelection(selection), [selection]);
    const _onValueChange = useCallback((value) => {
        setSelection(value);
        store.values[keyRef.current ?? 0].set({
            value: value,
            hasChanged: value.getTime() !== selection?.getTime(),
            isValid: true,
        });
        onValueChange?.(value);
    }, []);
    return (<DatePicker title={label} selection={_selection ?? defaultValue} onDateChange={_onValueChange} modifiers={[environment('locale', 'es_ES')]} range={{
            start: minDate,
            end: maxDate,
        }}/>);
});
