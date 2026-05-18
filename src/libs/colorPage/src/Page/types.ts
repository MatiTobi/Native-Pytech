import type { ColorsType } from '@/libs/components/Gradient'
import type itemProps from '../Item/types'

export type BaseProps = {
    /**
        Title of the date picker.
        @default 'default'
    */
        selectedColor?: ColorsType
    
    /**
        Function to be called when the user selects a color.
    */
    onSelectColor?: (color: ColorsType) => void
}

type Props = BaseProps & {

    /**
        Function to render the item.
    */
    renderItem?: (props: itemProps) => React.ReactNode
}

export default Props