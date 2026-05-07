import Page from './src/components/Page';
import Item from './src/components/Item';
type EditPageComponent = typeof Page & {
    Item: typeof Item;
};
declare const EditPage: EditPageComponent;
export default EditPage;
