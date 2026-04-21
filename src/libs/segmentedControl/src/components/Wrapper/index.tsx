import React, { memo, useState, useRef } from 'react';

import { useEffectWithoutFirstRender } from 'libs/constants/hooks';

import Props from './types';
import Segmented from '../Segmented';
import Provider, { useShared } from '../../context/shared';
import { getIndex } from '../../utils';



export default memo(({
    data=[],
    selectedIndex=0,
    onChange,
    ...props

}: Props) => {

    const _selectedIndex = getIndex(selectedIndex)

    // Creamos el state interno para activar el onChange
    const [currentSelectedIndex, setCurrentSelectedIndex] = useState(selectedIndex)
    const currentSelectedIndexRef = useRef(selectedIndex)

    useEffectWithoutFirstRender(() => {
        currentSelectedIndexRef.current = currentSelectedIndex
        onChange?.({index: currentSelectedIndex, item: data[currentSelectedIndex]})
    }, [currentSelectedIndex])

    // Nos fijamos si ya está dentro del context.
    const { selectedIndexShared } = useShared() ?? {}
    
    const component = (
        <Segmented
            data={data}
            selectedIndex={_selectedIndex}
            setCurrentSelectedIndex={setCurrentSelectedIndex}
            currentSelectedIndexRef={currentSelectedIndexRef}
            {...props}
        />
    )

    if (!selectedIndexShared) return (
        <Provider selectedIndex={_selectedIndex}>
            {component}
        </Provider>
    )
    return component
})