import { Host, Image } from '@expo/ui/swift-ui';
export default ({ systemName, iconSize = 100 }) => {
    return (<Host matchContents>
            <Image systemName={systemName} color='white' size={iconSize}/>
        </Host>);
};
