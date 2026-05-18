import type { ColorsType } from '@/libs/components/Gradient'
import PropsPage from '../Page/types'


type Props = PropsPage & {
    /**
        Color to display.
    */
    color: ColorsType

    /**
        Size of the item.
    */
    size: number
}

export default Props