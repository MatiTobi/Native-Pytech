import Page from './src/components/Page';
import Item from './src/components/Item';
type PickerPageComponent = typeof Page & {
    Item: typeof Item;
};
declare const PickerPage: PickerPageComponent;
export default PickerPage;
