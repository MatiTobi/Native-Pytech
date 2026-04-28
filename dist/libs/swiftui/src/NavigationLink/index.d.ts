import type { ButtonProps } from '@expo/ui/swift-ui';
import WithSecondary from './WithSecondary';
type Component = React.MemoExoticComponent<React.FC<ButtonProps>> & {
    WithSecondary: typeof WithSecondary;
};
declare const NavigationLink: Component;
export default NavigationLink;
