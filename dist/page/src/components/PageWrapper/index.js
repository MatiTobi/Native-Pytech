import React, { memo } from 'react';
import WithIcon from '../WithIcon';
import Page from '../Page';
/**
    Crea una Página con ScrollView.
*/
const PageComponent = memo(({ children, style }) => {
    return (<Page style={style}>
            {children}
        </Page>);
});
PageComponent.WithIcon = WithIcon;
export default PageComponent;
