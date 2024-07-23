import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as S from './styles'

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
            <CardFilter active={true} label={'pendentes'} counter={1}/>
            <CardFilter label={'concluidas'} counter={1}/>
            <CardFilter label={'urgentes'} counter={1}/>
            <CardFilter label={'importantes'} counter={1}/>
            <CardFilter label={'normal'} counter={1}/>
            <CardFilter label={'todas'} counter={1}/>
        </S.Filters>
    </S.Aside>
    )
}

            



export default Sidebar