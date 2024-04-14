import React from 'react'
import styles from './style.module.css'
import icon from '../../assets/ipro.png'

function Inprogres() {
  return (
    <div className={styles.root}>
        <p className={styles.label} ><img src={icon} alt="" /> In progres</p>
    </div>
  )
}

export default Inprogres