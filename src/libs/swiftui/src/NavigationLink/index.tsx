import type { ButtonProps } from '@expo/ui/swift-ui';
import Wrapper from './Wrapper';
import WithSecondary from './WithSecondary';


type Component = React.MemoExoticComponent<React.FC<ButtonProps>> & {
    WithSecondary: typeof WithSecondary
}


const NavigationLink = Wrapper as Component;
NavigationLink.WithSecondary = WithSecondary;
export default NavigationLink;