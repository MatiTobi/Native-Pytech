import List from './BaseList';
import Editable from './Editable';


type Component = typeof List & {
    Editable: typeof Editable
}

const ListComponent = List as Component

ListComponent.Editable = Editable
export default ListComponent