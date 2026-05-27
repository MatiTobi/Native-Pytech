import { useValue } from "@legendapp/state/react";
import { memo, useRef } from "react";
import Screen from "../../../Screen";
export default memo(({ store, fieldName, ...props }) => {
    const textRef = useRef(null);
    const onChangeText = (text) => textRef.current = text;
    const onBlur = () => store.fields[fieldName].value.set(textRef.current || '');
    const messageError = useValue(() => store.fields[fieldName].error.get());
    return (<Screen.Input {...props} onChangeText={onChangeText} onBlur={onBlur} messageError={messageError} styleMessageError={{ textAlign: 'left' }}/>);
});
