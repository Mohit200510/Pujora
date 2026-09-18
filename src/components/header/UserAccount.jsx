import React from 'react'
import { CircleUserRound } from 'lucide-react';
import styles from "./Header.module.css"


function UserAccount({className}) {
  return (
    <div>
     
        <CircleUserRound className={className} size={27}></CircleUserRound>
         {/* <span style={{color: "#fff"}}> Mohit</span> */}
    </div>
  )
}

export default UserAccount