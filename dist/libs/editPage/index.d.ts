import Page from './src/components/Page';
import Item from './src/components/Item';
import ItemDate from './src/components/ItemDate';
type EditPageComponent = typeof Page & {
    Item: typeof Item;
    ItemDate: typeof ItemDate;
};
declare const EditPage: EditPageComponent;
export default EditPage;
