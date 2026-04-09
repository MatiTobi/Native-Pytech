import React from 'react';
import Ionicons from './Ionicons';
import WaterSvg from './svgs/water.svg';
import HappySvg from './svgs/happy.svg';
import SadSvg from './svgs/sad.svg';
import CubeSvg from './svgs/cube.svg';
import EllipseSvg from './svgs/ellipse.svg';
import InformationCircleOutlineSvg from './svgs/information-circle-outline.svg';
const getRawPaths = (Icon) => {
    const svgElement = Icon({});
    const paths = React.Children.toArray(svgElement.props.children)
        .filter((el) => React.isValidElement(el));
    return paths;
};
export const _icons = {
    water: getRawPaths(WaterSvg),
    happy: getRawPaths(HappySvg),
    sad: getRawPaths(SadSvg),
    cube: getRawPaths(CubeSvg),
    ellipse: getRawPaths(EllipseSvg),
    'information-circle-outline': getRawPaths(InformationCircleOutlineSvg),
};
export default Ionicons;
