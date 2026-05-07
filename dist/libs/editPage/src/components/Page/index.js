import { Host, List, Section } from '@expo/ui/swift-ui';
import { useObservable, useValue } from '@legendapp/state/react';
import { Stack, useRouter } from 'expo-router';
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { useEffectWithoutFirstRender } from '../../../../../libs/constants/hooks';
import { Provider } from '../../context/page';
import { Provider as ItemProvider } from '../../context/item';
function Component({ data = [], renderItem, onSave, }) {
    // ------------------- Variables -------------------
    const router = useRouter();
    const saveEnabledRef = useRef(false);
    const values = (data ?? []).reduce((acc, item, index) => {
        acc[index] = {
            value: undefined,
            hasChanged: false,
            isValid: true,
        };
        return acc;
    }, {});
    const store = useObservable({
        values: values,
        saveEnabled: (() => {
            const values = store.values.get();
            const listValues = Object.values(values);
            const hasChanged = listValues.some(value => value.hasChanged);
            const allValid = listValues.every(value => value.isValid);
            return hasChanged && allValid;
        }),
    });
    const saveEnabled = useValue(() => store.saveEnabled.get());
    useEffectWithoutFirstRender(() => {
        saveEnabledRef.current = saveEnabled;
    }, [saveEnabled]);
    const textFieldsRefs = useRef({});
    // ------------------- Functions -------------------
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
    // ------------------- Provider -------------------
    const value = useMemo(() => ({
        store,
        saveEnabledRef,
        onPressSave,
        isUniqueItem: (data?.length ?? 0) === 1,
        textFieldsRefs
    }), []);
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

			<Host style={{ flex: 1 }}>
				<List>
					<Section>
						<Provider value={value}>
							{data.map((item, index) => {
            const nextIndex = index + 1;
            const value = { index, nextIndex: nextIndex < data.length ? nextIndex : undefined };
            return (<ItemProvider key={index} value={value}>
										{renderItem?.(item)}
									</ItemProvider>);
        })}
						</Provider>
					</Section>
				</List>
			</Host>
		</>);
}
export default memo(Component);
