import type { ColorsType } from '../../../../libs/components/Gradient';
import PropsPage, { renderGradientProps } from '../Page/types';
type Props = PropsPage & {
    /**
        List of rows of colors to display.
        Each row contains 4 colors.
    */
    colorRows: ColorsType[][];
};
export type DecoratorProps = renderGradientProps & PropsPage;
export default Props;
