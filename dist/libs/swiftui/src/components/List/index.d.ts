import List from './BaseList';
import Editable from './Editable';
type Component = typeof List & {
    Editable: typeof Editable;
};
declare const ListComponent: Component;
export default ListComponent;
