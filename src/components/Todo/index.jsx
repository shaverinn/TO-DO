import React from 'react'
import styles from './style.module.css'
import icon from '../../assets/Todoo.png'
import Task from '../Task'

function Todo() {
  return (
    <div className={styles.root}>
        <p className={styles.label} ><img src={icon} alt="" /> To Do</p>
        <Task />
    </div>
  )
}

export default Todo