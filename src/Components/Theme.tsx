import React from 'react'

import { useApp } from 'reactNative/Providers/App'
import { ColorSchemeType } from 'reactNative/colors'



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