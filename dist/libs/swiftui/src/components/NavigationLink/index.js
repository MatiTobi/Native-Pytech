import { Button, HStack, Label } from '@expo/ui/swift-ui';
import { listRowInsets as listRowInsetsModifier, foregroundStyle } from '@expo/ui/swift-ui/modifiers';
import { memo, useMemo } from 'react';
import Trailing from './Trailing';
export default memo(({ children, onPress, icon, label, systemImage, listRowInsets = false, trailingText, trailingTextProps, trailingComponent, modifiers }) => {
    const _modifiers = useMemo(() => [
        ...(modifiers ?? []),
        ...(listRowInsets ? [listRowInsetsModifier({ top: 20, bottom: 20, leading: 25, trailing: 20 })] : []),
    ], [modifiers, listRowInsets]);
    return (<HStack modifiers={_modifiers}>
            <Button onPress={onPress} modifiers={[foregroundStyle({ type: 'hierarchical', style: 'primary' })]}>
                {children ?? (!systemImage ? <Label title={label} icon={icon}/> : undefined)}
            </Button>
            {systemImage && <Label title={label} systemImage={systemImage} icon={icon}/>}
            <Trailing text={trailingText} textProps={trailingTextProps} component={trailingComponent}/>
        </HStack>);
});
