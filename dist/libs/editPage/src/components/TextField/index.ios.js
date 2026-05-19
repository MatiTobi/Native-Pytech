import React, { useMemo, memo, useRef, useCallback, useEffect } from "react";
import { useValue } from "@legendapp/state/react";
import { SecureField, TextField } from "@expo/ui/swift-ui";
import { keyboardType as keyboardTypeModifier, submitLabel, textInputAutocapitalization, onSubmit } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
export default memo(({ itemKey, defaultValue, placeholder, keyboardType, autocapitalization = true, secureTextEntry, isValid, }) => {
    const { store, registerItem, onSubmit: _onSubmit } = usePage();
    const isUniqueItem = useValue(() => store.isUniqueItem.get());
    const ref = useRef(null);
    const key = registerItem(itemKey, ref);
    console.log(placeholder, 'key', key);
    useEffect(() => store.values[key].value.set(defaultValue), [defaultValue]);
    // onChange
    const onValueChange = useCallback((value) => {
        const _value = value.trim() === '' ? null : value.trim();
        store.values[key].set({
            value: _value,
            hasChanged: _value !== defaultValue,
            isValid: isValid?.(_value) ?? true,
        });
    }, []);
    // Props
    const modifiers = useMemo(() => [
        ...(isUniqueItem ? [submitLabel('done')] : []),
        ...(keyboardType ? [keyboardTypeModifier(keyboardType)] : []),
        ...(!autocapitalization ? [textInputAutocapitalization('never')] : []),
        onSubmit(() => _onSubmit(key)),
    ], [keyboardType, autocapitalization, isUniqueItem]);
    const props = { autoFocus: isUniqueItem, modifiers, placeholder, defaultValue, onValueChange };
    if (secureTextEntry)
        return <SecureField {...props} ref={ref}/>;
    return <TextField {...props} ref={ref}/>;
});
