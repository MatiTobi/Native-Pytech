import React, { memo } from 'react';
import ThemeComponent from 'libs/components/Theme';
import * as OptionComponents from '../OptionComponents';
import Wrapper from '../Wrapper';
const OptionWrapper = memo(({ ...props }) => {
    return <ThemeComponent component={Wrapper} {...props}/>;
});
OptionWrapper.Components = OptionComponents;
export default OptionWrapper;
