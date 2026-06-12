import Wrapper from './src/components/Wrapper';
import Item from './src/components/Item';
import ItemDate from './src/components/ItemDate/DatePicker';


type Component = typeof Wrapper & {
    Item: typeof Item
    ItemDate: typeof ItemDate
}

const Screen = Wrapper as Component
Screen.Item = Item
Screen.ItemDate = ItemDate

export default Screen