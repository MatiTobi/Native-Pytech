import { Button, RNHostView, VStack } from '@expo/ui/swift-ui';
import { frame, font, buttonStyle } from '@expo/ui/swift-ui/modifiers';
import React, { memo, useMemo } from 'react';
import Gradient from '../../../../libs/components/Gradient';
import Text from '../Text';
import Section from './Section';
export default memo(({ title, subtitle, gradientProps, buttonProps, }) => {
    const spacing = gradientProps?.type === 'extraLarge' ? 10 : 20;
    const titleElement = useMemo(() => (<Text modifiers={[font({ weight: 'bold', size: 30 })]}>
            {title}
        </Text>), [title]);
    return (<Section spacing={spacing}>
            {gradientProps && (<RNHostView matchContents>
                    <Gradient {...gradientProps}/>
                </RNHostView>)}

            {(title || subtitle) && (subtitle ? (<VStack modifiers={[frame({ alignment: 'center' })]} spacing={2}>
                        <Title title={title}/>
                        <Text secondary>
                            {subtitle}
                        </Text>
                    </VStack>) : (<Title title={title}/>))}

            {buttonProps && (<Button {...buttonProps} modifiers={[buttonStyle('bordered'), ...(buttonProps?.modifiers || [])]}/>)}
        </Section>);
});
const Title = memo(({ title }) => {
    return (<Text modifiers={[font({ weight: 'bold', size: 30 })]}>
            {title}
        </Text>);
});
