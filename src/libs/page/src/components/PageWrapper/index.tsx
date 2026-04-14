import React, { memo } from 'react';

import WithIcon from '../WithIcon';
import Page from '../Page';
import Props, { Component } from './types';



/**
    Crea una Página con ScrollView.
*/
const PageComponent = memo(({ children, style }: Props) => {
    return (
        <Page style={style}>
            {children}
        </Page>
    )
}) as Component;

PageComponent.WithIcon = WithIcon

export default PageComponent