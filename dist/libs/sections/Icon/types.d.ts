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
    buttonProps?: {
        label: string;
        onPress: () => void;
    };
};
export default Props;
