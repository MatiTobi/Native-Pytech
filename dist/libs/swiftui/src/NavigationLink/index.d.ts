import { Props as WrapperProps } from './Wrapper';
import WithSecondary from './WithSecondary';
type Component = React.MemoExoticComponent<React.FC<WrapperProps>> & {
    WithSecondary: typeof WithSecondary;
};
declare const NavigationLink: Component;
export default NavigationLink;
