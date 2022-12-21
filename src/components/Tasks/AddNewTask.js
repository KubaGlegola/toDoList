import React, {Fragment} from 'react';
import classes from './AddNewTask.module.css';
import {AiOutlinePlus} from 'react-icons/ai';

const AddNewTask = () => {
  return (
    <div className={classes.addNewTask}>
        <input type="text" placeholder='Create a new ToDo...'/>
        <AiOutlinePlus className={classes.icon}/>
    </div>
  )
}

export default AddNewTask