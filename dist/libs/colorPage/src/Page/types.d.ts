import type { ColorsType } from '../../../../libs/components/Gradient';
type Props = {
    /**
        Title of the date picker.
        @default 'default'
    */
    selectedColor?: ColorsType;
    /**
        Function to be called when the user selects a color.
    */
    onSelectColor?: (color: ColorsType) => void;
    /**
        Function to render the item.
    */
    renderGradient?: (props: renderGradientProps) => React.ReactNode;
};
type renderGradientProps = {
    /**
        Color to display.
    */
    color: ColorsType;
    /**
        Size of the item.
    */
    size: number;
};
export default Props;
