import { memo, useRef, useCallback, useEffect } from "react";
import { useValue } from "@legendapp/state/react";
import { useApp } from '../../../../../libs/providers/App';
import Table from '../../../../../libs/table';
import { usePage } from '../../context/page';
import Colors from '../../../../../libs/constants/colors';
export default memo(({ itemKey, defaultValue, placeholder, keyboardType, autocapitalization = true, secureTextEntry, isValid, }) => {
    const { colorScheme } = useApp();
    const { store, registerItem, onSubmit: _onSubmit } = usePage();
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
            hasChanged: _value != defaultValue,
            isValid: isValid?.(_value) ?? true,
        });
    }, []);
    return <Table.Option.Components.TextInput onChangeText={onValueChange} value={defaultValue} placeholderTextColor={Colors[colorScheme].SearchBarText} placeholder={placeholder ?? defaultValue} keyboardType={keyboardType} autoFocus={isUniqueItem} autoCapitalize={!autocapitalization ? 'none' : undefined} secureTextEntry={secureTextEntry} onSubmitEditing={() => _onSubmit(keyRef.current)}/>;
});
