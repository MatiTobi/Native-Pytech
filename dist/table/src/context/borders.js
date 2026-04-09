import { useMemo, useRef } from "react";
import { createCtx } from "../../../constants/utils";
const [Provider, useBorder] = createCtx();
export { useBorder };
export default ({ children }) => {
    const bordersRef = useRef({});
    const valueBorders = useMemo(() => (bordersRef), []);
    return (<Provider value={valueBorders}>
            {children}
        </Provider>);
};
