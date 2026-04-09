import React, { memo } from 'react';
import ThemeComponent from '../../components/Theme';
import { DeleteIcon, DragIcon, Icon, Image, Text, TextInput, TextInputCurrency, TextView } from './Components';
import Wrapper from './Wrapper';
export { useBorder } from './Wrapper/Contexts/Borders';
export { useDelete } from './Wrapper/Contexts/Delete/context';
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
