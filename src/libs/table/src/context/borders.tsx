import { Dispatch, SetStateAction, RefObject, useMemo, useRef } from "react"

import Utils from "@/libs/constants/utils"



const [Provider, useBorder] = Utils.createCtx<RefObject<
    {
        top: Dispatch<SetStateAction<boolean>>,
        bottom: Dispatch<SetStateAction<boolean>>
    } | Record<string, any>
>>()
export { useBorder }


export default ({ children }: { children: React.ReactNode }) => {

    const bordersRef = useRef<{ top: Dispatch<SetStateAction<boolean>>, bottom: Dispatch<SetStateAction<boolean>> } | Record<string, any>>({})
    const valueBorders = useMemo(() => ( bordersRef ), [])

    return (
        <Provider value={valueBorders}>
            {children}
        </Provider>
    )
}
