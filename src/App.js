import "./App.css";
import AddNewTask from "./components/Tasks/AddNewTask";
import TasksList from "./components/Tasks/TasksList";
import Header from "./components/UI/Header";
import TasksProvider from "./components/store/TasksProvider";

const tasks = [
  {
    id: 1,
    status: "active",
    content: "Read for 1 hour",
  },
  {
    id: 2,
    status: "active",
    content: "Read for 1 hour",
  },
  {
    id: 3,
    status: "active",
    content: "Read for 1 hour",
  },
  {
    id: 4,
    status: "completed",
    content: "Read for 1 hour",
  },
  {
    id: 5,
    status: "active",
    content: "10 minutes meditation",
  },
  {
    id: 6,
    status: "completed",
    content: "10 minutes meditation",
  },
];

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <Header />
        <AddNewTask />
        <TasksList data={tasks} />
      </div>
    </TasksProvider>
  );
}

export default App;
