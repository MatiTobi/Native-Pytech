import type { ColorsType } from '../../../../libs/components/Gradient';
import { BaseProps } from '../Page/types';
type Props = BaseProps & {
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
