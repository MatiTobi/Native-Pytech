import List from './List';
import Section from './Section';


type Component = typeof List & {
    Section: typeof Section
}

const ListComponent = List as Component

ListComponent.Section = Section
export default ListComponent