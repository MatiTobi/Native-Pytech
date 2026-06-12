import Wrapper from './src/components/Wrapper';
import Item from './src/components/Item';
import ItemDate from './src/components/ItemDate/DatePicker';
type Component = typeof Wrapper & {
    Item: typeof Item;
    ItemDate: typeof ItemDate;
};
declare const Screen: Component;
export default Screen;
