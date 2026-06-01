import { useMemo, useRef } from "react";
import Utils from "@/libs/constants/utils";
const [Provider, useBorder] = Utils.createCtx();
export { useBorder };
export default ({ children }) => {
    const bordersRef = useRef({});
    const valueBorders = useMemo(() => (bordersRef), []);
    return (<Provider value={valueBorders}>
            {children}
        </Provider>);
};
