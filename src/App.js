import './App.css';
import AddNewTask from './components/Tasks/AddNewTask';
import TasksList from './components/Tasks/TasksList';
import Header from './components/UI/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <AddNewTask/>
    <TasksList/>
    </div>
  );
}

export default App;
