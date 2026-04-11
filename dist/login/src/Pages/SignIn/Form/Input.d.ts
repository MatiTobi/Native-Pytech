import { Observable } from "@legendapp/state";
import Screen from "../../../Screen";
import { Store } from "../types";
type Props = {
    store: Observable<Store>;
    fieldName: keyof Store['fields'];
} & Omit<React.ComponentProps<typeof Screen.Input>, 'onFocus' | 'onChangeText' | 'messageError'>;
declare const _default: import("react").MemoExoticComponent<({ store, fieldName, ...props }: Props) => import("react").JSX.Element>;
export default _default;
