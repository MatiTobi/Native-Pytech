import Page from './src/Page';
import Item from './src/Item';


type PickerPageComponent = typeof Page & {
    Item: typeof Item
}

const PickerPage = Page as PickerPageComponent
PickerPage.Item = Item

export default PickerPage