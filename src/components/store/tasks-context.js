import React from "react";

const TasksContext = React.createContext({
  items: [],
  activeTasksAmount: 0,
  addTask: (item) => {},
  removeCompletedTasks: (id) => {},
  toggleStatus: (id) => {},
});

export default TasksContext;
