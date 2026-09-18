import React from 'react'
import { MapPin } from 'lucide-react';
import styles from "./Header.module.css";



function Location() {
  return (
    <div className={styles.location} style={{display: "flex" ,alignItems: "center" ,gap: "4px" ,color: "#fff"}}>
        <MapPin size={29} color="#f7f3ee" ></MapPin>
        <div style={{display: "flex" ,flexDirection: "column" ,gap: "-10px"}}>
          <p style={{fontSize: "15px"  ,fontFamily:" Inter, sans-serif"}}>Deliver to</p>
        <span style={{fontSize: "15px" ,color:"#c2bbb1" ,fontWeight: "500" ,fontFamily:" Inter, sans-serif"}}>140603</span>
        </div>
    </div>
  )
}


export default Location