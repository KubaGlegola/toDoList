import React, { useReducer } from "react";
import TasksContext from "./tasks-context";

const defaultTasksState = {
  items: [],
  activeTasksAmount: 0,
};

const tasksReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedActiveTasksAmount = state.activeTasksAmount + 1;
    let updatedItems;
    if (state.items.length > 0) {
      let updatedId = state.items.at(-1).id + 1;
      updatedItems = state.items.concat({
        id: updatedId,
        content: action.item.content,
        type: action.item.type,
      });
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      activeTasksAmount: updatedActiveTasksAmount,
    };
  }
  if (action.type === "TOGGLE") {
    const existingTask = state.items[action.id];
    const updatedStatus =
      existingTask.status === "active" ? "completed" : "active";

    const updatedTask = { ...existingTask, status: updatedStatus };

    let updatedTasks = [...state.items];
    updatedTasks[action.id] = updatedTask;

    return {
      items: updatedTasks,
      activeTasksAmount: state.activeTasksAmount,
    };
  }

  return defaultTasksState;
};

const TasksProvider = (props) => {
  const [tasksState, dispatchTasksAction] = useReducer(
    tasksReducer,
    defaultTasksState
  );

  const addNewTaskHandler = (item) => {
    dispatchTasksAction({ type: "ADD", item: item });
  };

  const removeCompletedTasksHandler = (id) => {
    dispatchTasksAction({ type: "REMOVE", id: id });
  };

  const toggleStatusHandler = (id) => {
    dispatchTasksAction({ type: "TOGGLE", id: id });
  };

  const tasksContext = {
    items: tasksState.items,
    activeTasksAmount: tasksState.activeTasksAmount,
    addTask: addNewTaskHandler,
    removeCompletedTasks: removeCompletedTasksHandler,
    toggleStatus: toggleStatusHandler,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
