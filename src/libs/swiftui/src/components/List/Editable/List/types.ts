import type BaseListProps from '../../BaseList/types'


type Props = BaseListProps & {
    /**
        Whether the list is on edit mode.
    */
    editMode?: boolean

    /**
        Whether to enable the move of the items.
    */
    moveEnabled?: boolean
    
    /**
        Whether to enable the delete of the items.
    */
    deleteEnabled?: boolean
}

export default Props