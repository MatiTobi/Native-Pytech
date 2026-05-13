import { Host, Image } from '@expo/ui/swift-ui';

import type Props from './types';



export default ({ systemName, size=100 }: Props) => {
    return (
        <Host matchContents>
            <Image systemName={systemName} color='white' size={size} />
        </Host>
    )
}