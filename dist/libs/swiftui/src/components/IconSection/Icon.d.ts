import { ButtonProps } from '@expo/ui/swift-ui';
import { Props as GradientProps } from '@/libs/components/Gradient';
type Props = {
    /**
        The title of the icon section.
    */
    title?: string;
    /**
        The subtitle of the icon section.
    */
    subtitle?: string;
    /**
        If it is given, displays a gradient.
    */
    gradientProps?: Omit<GradientProps, 'type'> & {
        type: 'extraLarge' | 'extraExtraLarge';
    };
    /**
        If it is given, displays a button.
    */
    buttonProps?: ButtonProps;
};
declare const _default: import("react").MemoExoticComponent<({ title, subtitle, gradientProps, buttonProps, }: Props) => import("react").JSX.Element>;
export default _default;
