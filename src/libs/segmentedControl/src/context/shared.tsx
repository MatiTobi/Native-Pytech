import { type SharedValue, useSharedValue } from "react-native-reanimated"
import { createContext } from "react"

import { getIndex } from "../utils"
import { useContext } from "react"



export type ContextType = {selectedIndexShared: SharedValue<number>}
const context = createContext<ContextType | null>(null)
export const useShared = () => useContext(context)


export default ({ children, selectedIndex=0 }: { children: React.ReactNode, selectedIndex?: number }) => {

    const _selectedIndex = getIndex(selectedIndex)

    const selectedIndexShared = useSharedValue(_selectedIndex)

    return (
        <context.Provider value={{ selectedIndexShared }}>
            {children}
        </context.Provider>
    )
}