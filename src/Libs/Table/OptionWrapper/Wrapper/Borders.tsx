import { useValue } from '@legendapp/state/react'
import React, { memo, useEffect, useMemo, useState } from 'react'
import { PixelRatio, View, StyleSheet } from 'react-native'

import Colors from 'react-native-pytech/colors'
import { useEffectWithoutFirstRender } from 'react-native-pytech/defs'
import { useApp } from 'react-native-pytech/Providers/App'

import { useStore, useTable } from '../../context'
import { useBorder } from './Contexts/Borders'
import { left, right } from './Option'



const heightPixel = PixelRatio.roundToNearestPixel(1)

export default memo(({ id, borders }: { id: string, borders: any }) => {

    if (borders.color) return <Component id={id} borders={borders} />

    const { colorScheme } = useApp()
    const { colorThemeType } = useTable()

    borders.color = Colors.table[colorThemeType][colorScheme].border
    return <Component id={id} borders={borders} />

})

const Component = memo(({ id, borders }: { id: string, borders: any }) => {

    const shownTop = borders?.shownTop
    const shownBottom = borders?.shownBottom

    const justTop = shownTop === true && shownBottom === false
    const justBottom = shownTop === false && shownBottom === true

    const styleSpaces = { left: borders?.left ?? left, right: borders?.right ?? right }

    //Si solo hay 1 border y ambos estan predefinidos...
    if (justTop || justBottom){
        //Version super light
        const style = justTop ? { bottom: null } : { top: null } //Cancela el bottom o el top de styles.space
        return <View style={[styles.space, styles.border, styleSpaces, style, { backgroundColor: borders.color }]} />
    }
    
    return (
        <View style={[styles.space, styleSpaces]}>
            {shownTop == null ? 
                <BorderExtended isTop={true} id={id} color={borders.color} /> :
                <Border show={borders.shownTop} color={borders.color} />
            }
            {shownBottom == null ? 
                <BorderExtended isTop={false} id={id} color={borders.color} /> :
                <Border show={borders.shownBottom} color={borders.color} />
            }
        </View>
    )
})


const BorderExtended = memo(({ isTop, id, color }: { isTop: boolean, id: string, color: string }) => {

    const { keys, allBorders } = useTable()
    const store = useStore()

    const hasKeys = keys && keys.length > 0

    const showStore = useValue(() => {
        if (isTop){
            const isFirstId = store.deleted.firstId.get() === id
            return allBorders ? (hasKeys ? isFirstId : false) : !hasKeys
        } else {
            const isLastId = store.deleted.lastId.get() === id
            return allBorders ? true : (hasKeys ? !isLastId : false)
        }
    })

    const [Show, setShow] = useState(showStore)
    const bordersRef = useBorder()

    useEffect(() => {
        if (isTop) bordersRef.current.top = setShow
        else bordersRef.current.bottom = setShow
    }, [])

    useEffectWithoutFirstRender(() => {
        setShow(showStore)
    }, [showStore])

    return <Border show={Show} color={color} />

})


const Border = memo(({ show, color }: { show: boolean, color: string }) => {
    return <View style={[styles.border, { backgroundColor: show ? color : 'transparent' }]} />
})


const styles = StyleSheet.create({

    space: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'column',
        left: left,
        right: right,
        bottom: 0,
        top: -heightPixel
    },
    border: {
        height: heightPixel,
    }
    
})