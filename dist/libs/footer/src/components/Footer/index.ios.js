import React, { memo } from 'react';
import { Overlay } from '@expo/ui/swift-ui';
export default memo(({ children, backgroundColorPage }) => {
    return (<Overlay.Content>
            {children}
        </Overlay.Content>);
});
