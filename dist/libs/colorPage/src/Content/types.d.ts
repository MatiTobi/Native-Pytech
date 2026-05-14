import type { ColorsType } from '../../../../libs/components/Gradient';
import PropsPage from '../Page/types';
type Props = PropsPage & {
    /**
        List of rows of colors to display.
        Each row contains 4 colors.
    */
    colorRows: ColorsType[][];
};
export default Props;
