import React, { useContext } from "react";
import classes from "./Task.module.css";
import { MdDone } from "react-icons/md";
import TasksContext from "../store/tasks-context";

const Task = (props) => {
  const tasksCtx = useContext(TasksContext);

  const toggleStatusHandler = (event) => {
    console.log(event);
    tasksCtx.toggleStatus(0);
  };

  return (
    <div
      className={`${classes.task} ${
        props.type === "completed" ? classes["task--completed"] : ""
      }`}
    >
      <span
        onClick={toggleStatusHandler}
        className={`${classes.circle} ${
          props.type === "completed" ? classes["circle--completed"] : ""
        }`}
      >
        {props.type === "completed" ? <MdDone /> : ""}
      </span>
      <span className={classes.description}>{props.content}</span>
    </div>
  );
};

export default Task;
