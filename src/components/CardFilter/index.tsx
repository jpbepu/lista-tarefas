import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Tasks'
import { RootReducer } from '../../store'



export type Props = {
    label: string
    criteria: 'prioridade' | 'status' | 'todas'
    value?: enums.Priority | enums.Status

}

const CardFilter = ({ label, criteria, value}: Props) => {

    const dispatch = useDispatch()
    const { filter, tasks } = useSelector((state: RootReducer) => state)

    const checkIsActive = () => {
        const sameCriteria = filter.criteria === criteria
        const sameValue = filter.value === value

        return sameCriteria && sameValue
    }

    const countTasks = () => {
        if (criteria === 'todas') return tasks.items.length
        if (criteria === 'prioridade') {
            return tasks.items.filter(item => item.priority === value).length
        }
        if (criteria === 'status') {
            return tasks.items.filter(item => item.status === value).length
        }
    }
        
    const filterTasks = () => {
        dispatch(
            changeFilter({
                criteria,
                value
            })
        )
    }

    const active = checkIsActive()
    const counter = countTasks()

    return (

        <S.Card active={active} onClick={filterTasks}>
            <S.Counter >{counter}</S.Counter>
            <S.Label>{label}</S.Label>
        </S.Card>
    
    )
}


export default CardFilter