import React, { Fragment, useContext, useState } from "react";
import classes from "./AddNewTask.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import TasksContext from "../store/tasks-context";

const AddNewTask = () => {
  const tasksCtx = useContext(TasksContext);

  const [enteredToDoValue, setEnteredToDoValue] = useState();
  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredToDoValue.trim().length > 0) {
      tasksCtx.addTask({ id: 0, type: "active", content: enteredToDoValue });
    }
  };

  const todoChangeHandler = (event) => {
    setEnteredToDoValue(event.target.value);
  };

  return (
    <form className={classes.addNewTask} onSubmit={addTaskHandler}>
      <input
        type="text"
        placeholder="Create a new ToDo..."
        onChange={todoChangeHandler}
      />
      <button type="submit">
        <AiOutlinePlus className={classes.icon} />
      </button>
    </form>
  );
};

export default AddNewTask;
