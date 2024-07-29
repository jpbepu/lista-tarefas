import Sidebar from '../../containers/Sidebar';
import TaskList from '../../containers/TaskList';
import AddTask from '../../components/AddTask'

const Home = () => (
    <>
        <Sidebar showFilters />
        <TaskList />
        <AddTask/>
    </>
)

export default Home