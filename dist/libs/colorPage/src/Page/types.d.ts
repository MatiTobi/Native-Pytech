import type { ColorsType } from '../../../../libs/components/Gradient';
export type BaseProps = {
    /**
        Title of the date picker.
        @default 'default'
    */
    selectedColor?: ColorsType;
    /**
        Function to be called when the user selects a color.
    */
    onSelectColor?: (color: ColorsType) => void;
};
export type renderGradientProps = {
    /**
        Color to display.
    */
    color: ColorsType;
    /**
        Size of the item.
    */
    size: number;
};
type Props = BaseProps & {
    /**
        Function to render the item.
    */
    renderGradient?: (props: renderGradientProps) => React.ReactNode;
};
export default Props;
