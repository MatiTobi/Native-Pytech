import Page from './src/Page';
import Item from './src/Item';
type PickerPageComponent = typeof Page & {
    Item: typeof Item;
};
declare const PickerPage: PickerPageComponent;
export default PickerPage;
