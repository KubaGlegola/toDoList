import React, {Fragment} from 'react'
import Task from '../task/Task'
import classes from './AddNewTask.module.css';

const AddNewTask = () => {
  return (
    <Fragment>
    <Task className={classes.tasks} description="Create a new todo..."/>
    </Fragment>
  )
}

export default AddNewTask