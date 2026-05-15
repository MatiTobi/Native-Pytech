import type { ColorsType } from '@/libs/components/Gradient'


type Props = {
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

export default Props