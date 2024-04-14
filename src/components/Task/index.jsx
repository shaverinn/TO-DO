import React from 'react'
import styles from './style.module.css'


function Task() {
  return (
    <div className={styles.root}>
      <p>Christmas Banners</p>
      <div className={styles.badges}>
        <img className={styles.img} src="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/d609d561-61cc-4de4-acfa-d2818a80ab45/1920x" alt="" />
        <p className={styles.label}>Label</p>
      </div>
    </div>
  )
}

export default Task