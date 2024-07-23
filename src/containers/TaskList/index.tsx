import { useSelector } from "react-redux"

import Task from "../../components/Task"
import { Container } from "./styles"
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
    const { term } = useSelector((state:RootReducer) => state.filter)

    const filterTasks = () => {
        return items.filter( item => item.title.toLowerCase().search(term.toLowerCase()) >= 0)
    }

    return(
        <Container>
            <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;{term}&quot;</p>
            <ul>
                {filterTasks().map((t) => (
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
        </Container>
    )
}

export default TaskList