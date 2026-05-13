import { ListProps } from "@expo/ui/swift-ui";
type Props = ListProps & {
    /**
        Whether to disable the padding top of the list.
    */
    disablePaddingTop?: boolean;
    /**
        The function to handle the refresh event.
    */
    onRefresh?: () => Promise<void>;
};
export default Props;
