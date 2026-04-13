import React from 'react';
import { useApp } from 'providers/app';
export default ({ component, ...props }) => {
    const Component = component;
    if (props.colorScheme !== undefined) {
        return <Component {...props} colorScheme={props.colorScheme}/>;
    }
    const { colorScheme } = useApp();
    return <Component {...props} colorScheme={colorScheme}/>;
};
