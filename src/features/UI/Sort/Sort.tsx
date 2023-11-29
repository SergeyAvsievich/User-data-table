import { SortProps } from "./Sort.props"
import SortDescIcon from '../../assets/sort-desc.svg?react'
import SortAscIcon from '../../assets/sort-asc.svg?react'
import SortDefaultIcon from '../../assets/sort-default.svg?react'

export const Sort = ({sortState, onAscSort, onDescSort}: SortProps) => {
    switch(sortState) {
        case 'asc':
            return <SortAscIcon onClick={onAscSort} />
        case 'desc':
            return <SortDescIcon onClick={onDescSort} />
        case 'default':
            return <SortDefaultIcon onClick={onAscSort} />
        default:
            throw new Error('Неправильно передано состояние сортировки')
    }
}