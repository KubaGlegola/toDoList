import React from 'react';
import classes from './Task.module.css';
import {MdDone} from 'react-icons/md';

const Task = (props) => {
  return (
    <div className={`${classes.task} ${props.type === 'completed' ? classes['task--completed'] : ''}`}>
        <span className={`${classes.circle} ${props.type === 'completed' ? classes['circle--completed'] : ''}`}>{props.type === 'completed' ? <MdDone /> : ''}</span>
        <span className={classes.description}>{props.description}</span>
    </div>
  )
}

export default Task;