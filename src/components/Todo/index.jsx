import React from 'react'
import styles from './style.module.css'
import icon from '../../assets/Todoo.png'

function Todo() {
  return (
    <div className={styles.root}>
        <p className={styles.label} ><img src={icon} alt="" /> To Do</p>
    </div>
  )
}

export default Todo