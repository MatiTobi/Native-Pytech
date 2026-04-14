import { Observable } from "@legendapp/state";
import { useValue } from "@legendapp/state/react";
import { memo, useRef } from "react";

import Screen from "../../../Screen";
import { Store } from "../types";



type Props = {
    store: Observable<Store>
    fieldName: keyof Store['fields']
} & Omit<React.ComponentProps<typeof Screen.Input>, 'onFocus' | 'onChangeText' | 'messageError'>


export default memo(({
    store,
    fieldName,
    ...props

}: Props) => {

    const textRef = useRef<string | null>(null)

    const onChangeText = (text: string) => textRef.current = text
    const onBlur = () => store.fields[fieldName].value.set(textRef.current || '')

    const messageError = useValue(() => store.fields[fieldName].error.get())

    return (
        <Screen.Input
            {...props}
            onChangeText={onChangeText}
            onBlur={onBlur}
            messageError={messageError}
            styleMessageError={{textAlign: 'left'}}
        />
    )
})