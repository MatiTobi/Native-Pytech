import { useSharedValue } from "react-native-reanimated";
import React, { createContext, memo } from "react";
import { getIndex } from "../utils";
import { useContext } from "react";
const context = createContext(null);
export const useShared = () => useContext(context);
export default memo(({ children, selectedIndex = 0 }) => {
    const _selectedIndex = getIndex(selectedIndex);
    const selectedIndexShared = useSharedValue(_selectedIndex);
    return (<context.Provider value={{ selectedIndexShared }}>
            {children}
        </context.Provider>);
});
