import { Label, HStack } from '@expo/ui/swift-ui';
import { memo } from 'react';
export default memo(({ children, ...labelProps }) => {
    return (<HStack>
            <Label {...labelProps} title=""/>
            {children}
        </HStack>);
});
