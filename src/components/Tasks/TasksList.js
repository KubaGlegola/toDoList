import React from 'react';
import Task from '../task/Task';
import classes from './TasksList.module.css';

const TasksList = () => {
  return (
    <section className={classes.tasksList}>
        <Task type='completed' description="10 minutes meditation"/>
        <Task description="Read for 1 hour"/>
        <Task description="Read for 1 hour"/>
        <Task description="Read for 1 hour"/>
        <div className={classes.footer}>
            <span>5 items left</span>
            <div className={classes.actions}><span>All</span> <span>Active</span> <span>Completed</span></div>
            <span> Clear Completed</span>
        </div>
    </section>
  )
}

export default TasksList