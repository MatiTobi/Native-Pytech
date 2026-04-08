import { useObservable } from '@legendapp/state/react'
import * as Device from 'expo-device'
import React, { memo, useEffect, useRef } from 'react'
import { Platform, StyleSheet } from 'react-native'
import Animated, { Easing, FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'

import { addProps, Colors, ThemeType } from '../constants'
import { useApp } from '../providers/App'

import { BordersContext, StoreContext, TableContext, TableStore } from './context'
import OptionWrapper from './OptionWrapper'
import TableProps, { TableComponent } from './types'

export { useBorders, useStore, useTable } from './context'
export { useDelete, useBorder } from './OptionWrapper'



const Table = memo(({

    children,
    subtitulo,
    itemDetalle,
    colorThemeType = 'default',
    type = 'default',
    styleTable,
    styleTableView,
    allBorders = false,
    keys,

} : TableProps) => {

    const store = useObservable<TableStore>({
        pressed_id: null,
        deleted: {
            setted: false,
            id: null,
            keys: keys,
            lastId: (() => {
                const newKeys = store.deleted.keys.get() 
                return (newKeys?.[newKeys.length - 1] ?? null)
            }) as unknown as string | null,
            firstId: (() => {
                const newKeys = store.deleted.keys.get()
                return (newKeys?.[0] ?? null)
            }) as unknown as string | null,
        },
        borders: new Map<string, {top: (show: boolean) => void, bottom: (show: boolean) => void}>()
    })

    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) { isFirstRender.current = false; return }
        store.deleted.keys.set(keys)
    }, [keys])
  
    const { colorScheme } = useApp()
    const Theme : ThemeType = Colors[colorScheme]

    // Le agrega estilos y props a itemDetalle (Tiene que ser un Text)
    const newItemDetalle = itemDetalle ?
        addProps(itemDetalle, [styles.contTable_Text_2, {color: Theme.text2Libretas}], {
            entering: FadeIn.duration(100),
            exiting: FadeOut.duration(100),
        })
    : null;

    const layoutAnimation = Platform.OS === 'android' && deviceTier === 'low' ?
        LinearTransition.duration(500) : LinearTransition.easing(Easing.bezier(0.2, 0.2, 0, 1)).duration(600)
    
    return (
        <Animated.View style={[
            styles.contTable,
            type === 'default' ? {marginRight: 16, marginLeft: 16, marginBottom: newItemDetalle ? 20 : 30} : {},
            styleTable
        ]} key={subtitulo} layout={Platform.OS === 'web' ? undefined : LinearTransition.duration(100).easing(Easing.bezier(0.1, 0.1, 0, 1))}>

            {subtitulo && <Animated.Text key={subtitulo} style={[styles.contTable_Text, {color: Theme.text2Libretas}]} exiting={FadeOut.duration(100)} entering={FadeIn.duration(100)}>{subtitulo}</Animated.Text>}

            <Animated.View style={[
                styles.contTable_View,
                { backgroundColor: Colors.table[colorThemeType][colorScheme].background },
                styleTableView,
                type === 'default' ? {borderRadius: 26} : {},
            ]} exiting={FadeOut.duration(100)} entering={FadeIn.duration(100)} layout={layoutAnimation}>
                
                <TableContext.Provider value={{colorThemeType, type, keys, deviceTier, allBorders}}>
                    <StoreContext.Provider value={store}>
                        <BordersContext.Provider value={store.borders}>
                            {children}
                        </BordersContext.Provider>
                    </StoreContext.Provider>
                </TableContext.Provider>

                {/*<View style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: 'red', height: 1}} />*/}

            </Animated.View>

            {newItemDetalle}
        </Animated.View>
    )
}) as TableComponent



const styles = StyleSheet.create({

    contTable: {
        gap: 6,
    },
    contTable_Text: {
        marginLeft: 16,
        fontSize: 17,
        fontWeight: '600',
    },
    contTable_Text_2: {
        marginTop: 1.5,
        marginLeft: 15,
        fontSize: 13,
        marginRight: 16,
        lineHeight: 16
    },
    contTable_View: {
        overflow: 'hidden',
        position: 'relative',
    }
})



const getDeviceTier = () => {
	if (Platform.OS !== 'android') return 'high'
  
	const ramGB = Device.totalMemory
	  ? Device.totalMemory / 1024 / 1024 / 1024
	  : 0
  
	if (ramGB > 0 && ramGB <= 4) return 'low'
	if (ramGB <= 6) return 'medium'
	return 'high'
}
export const deviceTier = getDeviceTier();


Table.Option = OptionWrapper;

export default Table
