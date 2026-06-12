import { memo, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { usePage } from '../../context/page';
import Hooks from '../../../../../libs/constants/hooks';
import DatePicker from './DatePicker';
export default memo(({ itemKey, label, selection, defaultValue, minDate, maxDate, onValueChange, }) => {
    const { store, registerItem } = usePage();
    const [_selection, setSelection] = useState(selection);
    const currentDate = useMemo(() => _selection ?? defaultValue ?? new Date(), [_selection, defaultValue]);
    const currentDateRanged = useMemo(() => {
        if (maxDate && currentDate > maxDate)
            return maxDate;
        if (minDate && currentDate < minDate)
            return minDate;
        return currentDate;
    }, [currentDate, minDate, maxDate]);
    // Key
    const keyRef = useRef(itemKey);
    useEffect(() => {
        keyRef.current = registerItem(itemKey);
        _onValueChange(currentDate);
    }, []);
    // Hooks
    useEffect(() => setSelection(selection), [selection]);
    Hooks.useEffectWithoutFirstRender(() => {
        setSelection(currentDateRanged);
        _onValueChange(currentDateRanged);
    }, [currentDateRanged]);
    const _onValueChange = useCallback((value) => {
        setSelection(value);
        store.values[keyRef.current ?? 0].set({
            value: value,
            hasChanged: value.getTime() !== selection?.getTime(),
            isValid: true,
        });
        onValueChange?.(value);
    }, []);
    return (<DatePicker label={label} selection={currentDateRanged} onValueChange={_onValueChange} minDate={minDate} maxDate={maxDate}/>);
});
