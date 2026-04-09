import { useObservable } from '@legendapp/state/react'
import * as Device from 'expo-device'
import React, { memo, useEffect, useRef } from 'react'
import { Platform, StyleSheet } from 'react-native'
import Animated, { Easing, FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'

import Colors, { type ThemeType } from '../constants/colors'
import { addProps, useEffectWithoutFirstRender } from '../constants/utils'

import { useApp } from '../providers/app'

import { BordersContext, StoreContext, TableContext, TableStore } from './context'
import OptionWrapper from './optionWrapper'
import TableProps, { TableComponent } from './types'
import Detail from './detail'


export { useBorders, useStore, useTable } from './context'
export { useDelete, useBorder } from './optionWrapper'



const Table = memo(({

    children,
    title,
    renderDetail,
    colorThemeType = 'default',
    type = 'default',
    style,
    contentContainerStyle,
    allBorders = false,
    keys,

} : TableProps) => {

    // ------------- Variables -------------
    const { colorScheme } = useApp()
    const Theme : ThemeType = Colors[colorScheme]

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

    const layoutAnimation = Platform.OS === 'android' && deviceTier === 'low' ?
        LinearTransition.duration(500) : LinearTransition.easing(Easing.bezier(0.2, 0.2, 0, 1)).duration(600)


    // ------------- useEffect -------------
    useEffectWithoutFirstRender(() => store.deleted.keys.set(keys), [keys])


    return (
        <Animated.View 
            key={title}
            layout={Platform.OS === 'web' ? undefined : LinearTransition.duration(100).easing(Easing.bezier(0.1, 0.1, 0, 1))}
            style={[
                styles.container,
                type === 'default' ? {marginRight: 16, marginLeft: 16, marginBottom: renderDetail ? 20 : 30} : {},
                style
            ]}
        >
            {title &&
                <Animated.Text
                    key={title}
                    style={[styles.title, {color: Theme.text2Libretas}]}
                    exiting={FadeOut.duration(100)}
                    entering={FadeIn.duration(100)}
                >
                    {title}
                </Animated.Text>
            }
    

            <Animated.View
                exiting={FadeOut.duration(100)}
                entering={FadeIn.duration(100)}
                layout={layoutAnimation}
                style={[
                    styles.contentContainer,
                    { backgroundColor: Colors.table[colorThemeType][colorScheme].background },
                    contentContainerStyle,
                    type === 'default' ? {borderRadius: 26} : {},
                ]}
            >
                <TableContext.Provider value={{colorThemeType, type, keys, deviceTier, allBorders}}>
                    <StoreContext.Provider value={store}>
                        <BordersContext.Provider value={store.borders}>
                            {children}
                        </BordersContext.Provider>
                    </StoreContext.Provider>
                </TableContext.Provider>
            </Animated.View>


            {renderDetail &&
                <Animated.View entering={FadeIn.duration(100)} exiting={FadeOut.duration(100)}>
                    {renderDetail()}
                </Animated.View>
            }
        </Animated.View>
    )
}) as TableComponent



const styles = StyleSheet.create({

    container: {
        gap: 6,
    },
    title: {
        marginLeft: 16,
        fontSize: 17,
        fontWeight: '600',
    },
    contentContainer: {
        overflow: 'hidden',
        position: 'relative',
    },
    viewDetail: {
        marginTop: 1.5,
        marginLeft: 15,
        marginRight: 16
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


Table.Detail = Detail;
Table.Option = OptionWrapper;

export default Table
