import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'
import { InputField } from '../../styles'
import * as enums from '../../utils/enums/Tasks'
import { Button } from '../../styles'

type Props = {
    showFilters : boolean
}

const Sidebar = ({ showFilters }: Props) => {

    const dispatch = useDispatch()
    const { term } = useSelector((state: RootReducer) => state.filter)
    const navigate = useNavigate()

    return(
        <S.Aside>
            {showFilters ? (
                <>
                    <div>
                        <InputField
                            type="text"
                            placeholder="Buscar"
                            value={ term }
                            onChange={e=> dispatch(changeTerm(e.target.value))}
                        />
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
                </> 
            ) : (
                <Button type='button' onClick={() => navigate ('/')}>Voltar para a lista de tarefas</Button>
            )
            }
        </S.Aside>
    )
}

            



export default Sidebar