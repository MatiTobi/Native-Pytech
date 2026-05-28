import { TextProps } from '@expo/ui/swift-ui';
type Props = {
    /**
        Title to display in the label.
    */
    title?: string;
    /**
        Subtitle to display in the label.
    */
    subtitle?: string;
    /**
        Props to apply to the title.
    */
    titleTextProps?: TextProps;
    /**
        Props to apply to the subtitle.
    */
    subtitleTextProps?: TextProps;
};
declare const _default: import("react").MemoExoticComponent<({ title, subtitle, titleTextProps, subtitleTextProps }: Props) => import("react").JSX.Element>;
export default _default;
