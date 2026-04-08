import React, { ReactElement } from 'react'
import { Ionicons as IoniconsExpo } from '@expo/vector-icons'
import { SvgProps } from 'react-native-svg'
import Ionicons, { IoniconsProps } from './Ionicons'


type IoniconsName = IoniconsProps['name']

const svgContext = require.context('./svgs/', false, /\.svg$/)

const _icons: Partial<Record<IoniconsName, ReactElement[]>> = {}


const getRawPaths = (Icon: React.FC<SvgProps>): ReactElement[] => {

    const svgElement = (Icon as Function)({}) as ReactElement<SvgProps>
    const paths = React.Children.toArray(svgElement.props.children)
        .filter((el): el is ReactElement => React.isValidElement(el))

    return paths
}

svgContext.keys().forEach((key: string) => {
    const name = key.replace('./', '').replace('.svg', '').replace('svgs/', '') as IoniconsName

    if (!(name in IoniconsExpo.glyphMap)) {
        throw new Error(`El icono "${name}" no es un nombre válido de Ionicons`)
    }

    const mod = svgContext(key)
    const Icon = mod.default || mod
    const paths = getRawPaths(Icon)
    _icons[name] = paths
})

export { IoniconsProps, _icons }
export default Ionicons