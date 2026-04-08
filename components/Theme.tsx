import React from 'react'

import { useApp } from '../providers/App'
import { ColorSchemeType } from '../constants'



type WithColorScheme = {
    colorScheme: ColorSchemeType
}

export default <P extends object>({ component, ...props }: { component: React.ComponentType<P & WithColorScheme> } & Partial<WithColorScheme> & P) => {
    const Component = component
  
    if (props.colorScheme !== undefined) {
        return <Component {...props as any} colorScheme={props.colorScheme} />
    }
  
    const { colorScheme } = useApp()
  
    return <Component {...props as any} colorScheme={colorScheme} />
}