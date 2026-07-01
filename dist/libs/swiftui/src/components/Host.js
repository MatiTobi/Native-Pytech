import { Host } from '@expo/ui/swift-ui';
/**
    Le pone el style "{ flex: 1 }" por defecto
*/
export default ({ style, ...props }) => (<Host style={[{ flex: 1 }, style]} {...props}/>);
