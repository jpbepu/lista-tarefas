import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/Tasks'

const Sidebar = () => {

    const dispatch = useDispatch()
    const { term } = useSelector((state: RootReducer) => state.filter)

    return(
        <S.Aside>
        <div>
            <S.Pesquisa
                type="text"
                placeholder="Buscar"
                value={ term }
                onChange={e=> dispatch(changeTerm(e.target.value))}/>
        </div>
        <S.Filters>
            <CardFilter
                value={enums.Status.PENDING}
                criteria='status'
                label='pendentes'
            />
            <CardFilter
                value={enums.Status.COMPLETED}
                criteria='status'
                label='concluidas'
            />
            <CardFilter
                value={enums.Priority.URGENT}
                criteria='prioridade'
                label='urgentes'
            />
            <CardFilter
                value={enums.Priority.IMPORTANT}
                criteria='prioridade'
                label='importantes'
            />
            <CardFilter
                value={enums.Priority.NORMAL}
                criteria='prioridade'
                label='normal'
            />
            <CardFilter
                criteria='todas'
                label='todas'
            />
        </S.Filters>
    </S.Aside>
    )
}

            



export default Sidebar