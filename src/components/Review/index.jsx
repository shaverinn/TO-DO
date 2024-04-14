import React from 'react'
import styles from './style.module.css'
import icon from '../../assets/pen.png'

function Review() {
  return (
    <div className={styles.root}>
        <p className={styles.label} ><img src={icon} alt="" /> Review</p>
    </div>
  )
}

export default Review