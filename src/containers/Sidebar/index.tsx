import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
    <S.Aside>
        <div>
            <S.Pesquisa type="text" placeholder="buscar" />
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

            



export default Sidebar