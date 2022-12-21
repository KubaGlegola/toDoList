import React from 'react'
import classes from './Header.module.css';
import {FiSun} from 'react-icons/fi';

const Header = () => {
  return (
    <header className={classes.header}>
        <h1 className={classes.title}>TODO</h1>
        <span className={classes.themeSwitch}><FiSun /></span>
    </header>
  )
}

export default Header