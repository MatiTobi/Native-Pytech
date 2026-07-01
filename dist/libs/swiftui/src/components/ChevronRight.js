import { Image } from '@expo/ui/swift-ui';
import { Color } from 'expo-router';
import { memo } from 'react';
export default memo(() => (<Image systemName='chevron.right' size={16} color={Color.ios.opaqueSeparator}/>));
