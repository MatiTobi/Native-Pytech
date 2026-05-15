import List from './List';
import Section from './Section';
type Component = typeof List & {
    Section: typeof Section;
};
declare const ListComponent: Component;
export default ListComponent;
