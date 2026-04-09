import React, { memo } from 'react';
import ThemeComponent from '../../components/theme';
import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from './components';
import Wrapper from './wrapper';
export { useBorder } from './wrapper/contexts/borders';
export { useDelete } from './wrapper/contexts/delete/context';
const OptionWrapper = memo(({ ...props }) => {
    return <ThemeComponent component={Wrapper} {...props}/>;
});
OptionWrapper.Components = {
    DeleteIcon: DeleteIcon,
    DragIcon: DragIcon,
    Icon: Icon,
    Image: Image,
    Text: Text,
    TextInput: TextInput,
    TextInputCurrency: TextInputCurrency,
    TextView: TextView,
};
export default OptionWrapper;
