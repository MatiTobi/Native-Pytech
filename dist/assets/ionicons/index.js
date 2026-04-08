"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._icons = void 0;
const react_1 = __importDefault(require("react"));
const Ionicons_1 = __importDefault(require("./Ionicons"));
const water_svg_1 = __importDefault(require("./svgs/water.svg"));
const happy_svg_1 = __importDefault(require("./svgs/happy.svg"));
const sad_svg_1 = __importDefault(require("./svgs/sad.svg"));
const cube_svg_1 = __importDefault(require("./svgs/cube.svg"));
const ellipse_svg_1 = __importDefault(require("./svgs/ellipse.svg"));
const information_circle_outline_svg_1 = __importDefault(require("./svgs/information-circle-outline.svg"));
const getRawPaths = (Icon) => {
    const svgElement = Icon({});
    const paths = react_1.default.Children.toArray(svgElement.props.children)
        .filter((el) => react_1.default.isValidElement(el));
    return paths;
};
exports._icons = {
    water: getRawPaths(water_svg_1.default),
    happy: getRawPaths(happy_svg_1.default),
    sad: getRawPaths(sad_svg_1.default),
    cube: getRawPaths(cube_svg_1.default),
    ellipse: getRawPaths(ellipse_svg_1.default),
    'information-circle-outline': getRawPaths(information_circle_outline_svg_1.default),
};
exports.default = Ionicons_1.default;
