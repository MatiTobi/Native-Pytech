import Footer from './components/Footer';
import View from './components/View';
import Button from './components/Button';
type Component = typeof Footer & {
    ButtonView: typeof View;
    Button: typeof Button;
};
declare const FooterComponent: Component;
export default FooterComponent;
