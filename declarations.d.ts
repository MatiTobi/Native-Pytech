import 'expo/types/react-native-web'

declare module '*.svg' {
    import React from 'react'
    import { SvgProps } from 'react-native-svg'
    const content: React.FC<SvgProps>
    export default content
}

declare module '*.css'