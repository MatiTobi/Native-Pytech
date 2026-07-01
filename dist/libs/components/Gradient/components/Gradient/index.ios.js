import React, { memo } from 'react';
export default memo(({ text, color = 'default', type = 'small', systemName, sizeDiameter, size, renderGradientIOS, }) => {
    if (!renderGradientIOS)
        return null;
    return React.createElement(renderGradientIOS, { text, color, type, sizeDiameter, size, systemName });
});
