import Page from './src/components/Page';
import Item from './src/components/Item';


type EditPageComponent = typeof Page & {
    Item: typeof Item
}

const EditPage = Page as EditPageComponent
EditPage.Item = Item

export default EditPage