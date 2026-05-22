import { useObservable, useValue } from '@legendapp/state/react';
import { Stack, router } from 'expo-router';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { Provider } from '../../context/page';
import Screen from '../Screen';
export default memo(({ children, onSave }) => {
    const textFieldsRefs = useRef({});
    const indexRef = useRef(0);
    // Store
    const store = useObservable({
        values: {},
        saveEnabled: () => {
            const listValues = Object.values(store.values.get());
            const hasChanged = listValues.some(value => value.hasChanged);
            const allValid = listValues.every(value => value.isValid);
            return hasChanged && allValid;
        },
        isUniqueItem: () => {
            const listValues = Object.values(store.values.get());
            return listValues.length === 1;
        },
    });
    const saveEnabled = useValue(() => store.saveEnabled.get());
    // onPress
    const onPressSave = useCallback(async () => {
        // Obtengo los valores del store
        const values = store.values.peek();
        const valuesToSave = Object.values(values).map(value => value.value ?? null);
        // Llamo a la función onSave
        const result = await onSave?.(valuesToSave);
        if (result === false)
            return;
        router.back();
    }, [onSave, store.values]);
    // Register
    const registerItem = (itemKey, ref) => {
        const key = itemKey ?? indexRef.current;
        indexRef.current++;
        ref && (textFieldsRefs.current[key] = ref);
        return key;
    };
    const next = (itemKey) => {
        const keys = Object.keys(textFieldsRefs.current);
        const index = keys.findIndex(key => key > itemKey);
        if (index === -1)
            return;
        const nextKey = keys[index + 1];
        if (!nextKey)
            return;
        textFieldsRefs.current[nextKey].current?.focus();
    };
    const onSubmit = async (itemKey) => {
        console.log('onSubmit', 'itemKey', itemKey);
        // Guarda los cambios
        if (store.isUniqueItem.peek()) {
            if (!saveEnabled)
                return;
            await onPressSave();
            return;
        }
        // Va al siguiente campo
        next(itemKey);
    };
    const value = useMemo(() => ({ store, onSubmit, registerItem }), []);
    return (<>
			<Stack.Toolbar placement="left">
				<Stack.Toolbar.Button onPress={() => router.back()}>
					<Stack.Toolbar.Icon sf="xmark"/>
				</Stack.Toolbar.Button>
			</Stack.Toolbar>

			<Stack.Toolbar placement="right">
				<Stack.Toolbar.Button disabled={!saveEnabled} variant="done" onPress={onPressSave}>
					<Stack.Toolbar.Icon sf="checkmark"/>
				</Stack.Toolbar.Button>
			</Stack.Toolbar>

			<Screen>
				<Provider value={value}>
					{children}
				</Provider>
			</Screen>
		</>);
});
