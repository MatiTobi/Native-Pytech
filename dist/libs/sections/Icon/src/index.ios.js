import { Button, VStack } from '@expo/ui/swift-ui';
import { frame, font, buttonStyle } from '@expo/ui/swift-ui/modifiers';
import { memo } from 'react';
import Gradient from '@/libs/components/Gradient';
import Text from '@/libs/swiftui/src/components/Text';
import Section from './Section.ios';
export default memo(({ title, subtitle, gradientProps, buttonProps }) => {
    const spacing = gradientProps?.type === 'extraLarge' ? 10 : 20;
    return (<Section spacing={spacing}>
            {gradientProps && (<Gradient {...gradientProps}/>)}

            {(title || subtitle) && (subtitle ? (<VStack modifiers={[frame({ alignment: 'center' })]} spacing={2}>
                        <Title title={title}/>
                        <Text secondary>
                            {subtitle}
                        </Text>
                    </VStack>) : (<Title title={title}/>))}

            {buttonProps && (<Button {...buttonProps} modifiers={[buttonStyle('bordered')]}/>)}
        </Section>);
});
const Title = memo(({ title }) => {
    return (<Text modifiers={[font({ weight: 'bold', size: 30 })]}>
            {title}
        </Text>);
});
