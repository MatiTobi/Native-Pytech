import Section from './Section';
import Icon from './Icon';
type Component = typeof Section & {
    Icon: typeof Icon;
};
declare const IconSection: Component;
export default IconSection;
