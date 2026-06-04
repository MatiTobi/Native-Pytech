import { useMemo, memo, useRef, useCallback, useEffect } from "react";
import { useValue } from "@legendapp/state/react";
import { SecureField, TextField, useNativeState } from "@expo/ui/swift-ui";
import { keyboardType as keyboardTypeModifier, submitLabel, textInputAutocapitalization, onSubmit } from '@expo/ui/swift-ui/modifiers';
import { usePage } from '../../context/page';
export default memo(({ itemKey, defaultValue, placeholder, keyboardType, autocapitalization = true, secureTextEntry, isValid, }) => {
    const { store, registerItem, onSubmit: _onSubmit } = usePage();
    const text = useNativeState(defaultValue ?? '');
    const isUniqueItem = useValue(() => store.isUniqueItem.get());
    const ref = useRef(null);
    // Key
    const keyRef = useRef(itemKey ?? 0);
    useEffect(() => {
        keyRef.current = registerItem(itemKey, ref);
        onValueChange(defaultValue ?? '');
    }, []);
    // onChange
    const onValueChange = useCallback((value) => {
        const _value = value.trim() === '' ? null : value.trim();
        store.values[keyRef.current].set({
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
        onSubmit(() => _onSubmit(keyRef.current)),
    ], [keyboardType, autocapitalization, isUniqueItem]);
    const props = { ref, text: text, autoFocus: isUniqueItem, modifiers, placeholder, defaultValue, onTextChange: onValueChange };
    if (secureTextEntry)
        return <SecureField {...props}/>;
    return <TextField {...props}/>;
});
