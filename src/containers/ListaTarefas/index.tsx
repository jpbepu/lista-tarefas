import Task from "../../components/Task"
import { Container } from "./styles"
 
const ListaTarefas = () => (
    <Container>
        <p>2 tarefas marcadas como: xxx xxx</p>
        <ul>
            <li>
                <Task />
            </li>

            <li>
                <Task />
            </li>

            <li>
                <Task />
            </li>

            <li>
                <Task />
            </li>

            <li>
                <Task />
            </li>

        </ul>
    </Container>
)

export default ListaTarefas