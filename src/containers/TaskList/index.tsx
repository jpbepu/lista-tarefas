import { useSelector } from "react-redux"

import Task from "../../components/Task"
import { MainContainer, Title } from "../../styles"
import * as enums  from '../../utils/enums/Tasks'
import { RootReducer } from "../../store"


const tasks = [
    {
        title: 'estudar',
        description: 'assistir videos no yt',
        priority: enums.Priority.IMPORTANT,
        status: enums.Status.PENDING
    }
]
 
const TaskList = () => {

    const { items } = useSelector((state:RootReducer) => state.tasks) 
    const { term, criteria, value } = useSelector((state:RootReducer) => state.filter)

    const filterTasks = () => {
        let filteredTasks = items;

        if (term !== undefined) {
            filteredTasks = filteredTasks.filter( 
                (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
            )
            
            if (criteria === 'prioridade') {
                filteredTasks = filteredTasks.filter(
                    (item) => item.priority === value
                )
            } else if (criteria === 'status') {
                filteredTasks = filteredTasks.filter(
                    (item) => item.status === value
                )
            }

            return filteredTasks
        
        } else {
            return items
        }
    }

    const showFilterResults = (n: number) => {
        let message = ''
        let comp = term !== undefined && term.length > 0 ? `e "${term}"` : ''

        if (criteria === 'todas') {
            message = `${n} tarefa(s) encontradas como: todas ${comp}`
        } else {
            message = `${n} tarefa(s) encontradas como: "${criteria} = ${value}" ${comp}`
        }

        return message
    }

    const tasks = filterTasks()
    const message = showFilterResults(tasks.length)

    return(
        <MainContainer>
            <Title as="p">{message}</Title>
            <ul>
                {tasks.map((t) => (
                    <li key={t.title}>
                        <Task
                            id={t.id}
                            title={t.title}
                            description={t.description}
                            priority={t.priority}
                            status={t.status}
                        />
                    </li>
                ))}
    
            </ul>
        </MainContainer>
    )
}

export default TaskList