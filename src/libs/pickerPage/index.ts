import Page from './src/components/Page';
import Item from './src/components/Item';


type PickerPageComponent = typeof Page & {
    Item: typeof Item
}

const PickerPage = Page as PickerPageComponent
PickerPage.Item = Item

export default PickerPage