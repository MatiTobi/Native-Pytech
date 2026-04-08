import React, { ReactElement } from 'react'
import { Ionicons as IoniconsExpo } from '@expo/vector-icons'
import { SvgProps } from 'react-native-svg'
import Ionicons, { IoniconsProps } from './Ionicons'

import WaterSvg from './svgs/water.svg'
import HappySvg from './svgs/happy.svg'
import SadSvg from './svgs/sad.svg'
import CubeSvg from './svgs/cube.svg'
import EllipseSvg from './svgs/ellipse.svg'
import InformationCircleOutlineSvg from './svgs/information-circle-outline.svg'

type IoniconsName = IoniconsProps['name']

const getRawPaths = (Icon: React.FC<SvgProps>): ReactElement[] => {
    const svgElement = (Icon as Function)({}) as ReactElement<SvgProps>
    const paths = React.Children.toArray(svgElement.props.children)
        .filter((el): el is ReactElement => React.isValidElement(el))
    return paths
}

export const _icons: Partial<Record<IoniconsName, ReactElement[]>> = {
    water: getRawPaths(WaterSvg as React.FC<SvgProps>),
    happy: getRawPaths(HappySvg as React.FC<SvgProps>),
    sad: getRawPaths(SadSvg as React.FC<SvgProps>),
    cube: getRawPaths(CubeSvg as React.FC<SvgProps>),
    ellipse: getRawPaths(EllipseSvg as React.FC<SvgProps>),
    'information-circle-outline': getRawPaths(InformationCircleOutlineSvg as React.FC<SvgProps>),
}

export { IoniconsProps }
export default Ionicons