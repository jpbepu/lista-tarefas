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

    const { tasks } = useSelector((state:RootReducer) => state) 

    return(
        <Container>
            <p>2 tarefas marcadas como: xxx xxx</p>
            <ul>
                {tasks.map(t => (
                    <li key={t.title}>
                        <Task
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