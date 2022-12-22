import React, { useContext } from "react";
import Task from "../task/Task";
import classes from "./TasksList.module.css";
import TasksContext from "../store/tasks-context";

const TasksList = (props) => {
  const tasksCtx = useContext(TasksContext);
  const activeTasks = tasksCtx.activeTasksAmount;

  return (
    <section className={classes.tasksList}>
      {tasksCtx.items.map((task) => {
        return (
          <Task
            key={task.id}
            id={props.id}
            content={task.content}
            type={task.status}
          />
        );
      })}
      <div className={classes.footer}>
        <span>{activeTasks} items left</span>
        <div className={classes.actions}>
          <span className={`${classes["actions--active"]}`}>All</span>
          <span>Active</span> <span>Completed</span>
        </div>
        <span> Clear Completed</span>
      </div>
    </section>
  );
};

export default TasksList;
