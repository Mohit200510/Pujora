import React from 'react'
import styles from "./Overlay.module.css"

function Overlay({style,onClick}) {
  return (
    <div onClick={onClick} style={style} className={styles.overLay}></div>
  )
}

export default Overlay