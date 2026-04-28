import Wrapper, { Props as WrapperProps } from './Wrapper';
import WithSecondary from './WithSecondary';


type Component = React.MemoExoticComponent<React.FC<WrapperProps>> & {
    WithSecondary: typeof WithSecondary
}


(Wrapper as Component).WithSecondary = WithSecondary;
export default Wrapper;