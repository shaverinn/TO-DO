import React from 'react'
import styles from './style.module.css'
import icon from '../../assets/raket.png'

function Done() {
  return (
    <div className={styles.root}>
        <p className={styles.label} ><img src={icon} alt="" /> Done</p>
    </div>
  )
}

export default Done