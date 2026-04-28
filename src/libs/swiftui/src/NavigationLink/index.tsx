import Wrapper, { Props as WrapperProps } from './Wrapper';
import WithSecondary from './WithSecondary';


type Component = React.MemoExoticComponent<React.FC<WrapperProps>> & {
    WithSecondary: typeof WithSecondary
}


const NavigationLink = Wrapper as Component;
NavigationLink.WithSecondary = WithSecondary;
export default NavigationLink;