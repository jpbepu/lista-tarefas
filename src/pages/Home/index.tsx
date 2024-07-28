import Sidebar from '../../containers/Sidebar';
import TaskList from '../../containers/TaskList';
import AddTask from '../../components/AddTask'

const Home = () => (
    <>
        <Sidebar />
        <TaskList />
        <AddTask/>
    </>
)

export default Home