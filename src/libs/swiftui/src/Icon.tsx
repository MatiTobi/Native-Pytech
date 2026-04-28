import { Label, HStack } from '@expo/ui/swift-ui';
import { LabelProps } from '@expo/ui/swift-ui';
import React, { memo } from 'react';



type Props = Omit<LabelProps, 'title'> & {
    /**
        Children to display on the right side of the label.
    */
    children?: React.ReactNode
}


export default memo(({
    children,
    ...labelProps
    
}: Props) => {
    return (
        <HStack>
            <Label {...labelProps} title="" />
            {children}
        </HStack>
    )
})
