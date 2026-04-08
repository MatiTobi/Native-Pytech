import { Dispatch, SetStateAction } from "react"
import { createContext, RefObject, useContext, useMemo, useRef } from "react"


const BordersContext = createContext<RefObject<{ top: Dispatch<SetStateAction<boolean>>, bottom: Dispatch<SetStateAction<boolean>>} | Record<string, any>> | null>(null)
export const useBorder = () => {
    const context = useContext(BordersContext)
    if (!context) throw new Error('useBorder debe usarse dentro de un BordersContext.Provider')
    return context
}

export default ({ children }: { children: React.ReactNode }) => {

    const bordersRef = useRef<{ top: Dispatch<SetStateAction<boolean>>, bottom: Dispatch<SetStateAction<boolean>> } | Record<string, any>>({})
    const valueBorders = useMemo(() => ( bordersRef ), [])

    return (
        <BordersContext.Provider value={valueBorders}>
            {children}
        </BordersContext.Provider>
    )
}
